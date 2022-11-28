import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given('I open DuckDuckGo', () => {
  cy.visit('https://duckduckgo.com');
});

When('I search for {string}', (searchTerm) => {
  cy.get('#search_form_input_homepage').type(`${searchTerm}{enter}`);
});

Then('the first result should contain {string}', (searchTerm) => {
  cy.get('#r1-0').should('contain', searchTerm);
});
