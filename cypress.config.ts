import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
  projectId: "g53e7u",
  e2e: {
    baseUrl: 'http://localhost:4200'
  },
});
