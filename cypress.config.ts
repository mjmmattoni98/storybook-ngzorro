import { defineConfig } from 'cypress';
import * as webpack from '@cypress/webpack-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

const path = require("path");

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js'],
        },
        module: {
          rules: [
            {
              // test: /cypress\\e2e\\.*\.ts$/,
              test: /\.ts$/,
              // exclude: [/node_modules/],
              include: [path.resolve(__dirname, 'cypress', 'e2e')],
              use: [
                {
                  loader: 'ts-loader',
                },
              ],
            },
            {
              // test: /cypress\\e2e\\.*\.feature$/,
              test: /\.feature$/,
              include: [path.resolve(__dirname, 'cypress', 'e2e')],
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
  projectId: 'g53e7u',
  e2e: {
    // baseUrl: 'http://localhost:4200',
    // specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{ts,js}'],
    specPattern: '**/*.feature',
    supportFile: false,
    setupNodeEvents,
  },
});
