const cypress = require('cypress');
describe("Testing a Demo App", () => {

    it("Test1", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.title().should('eq','OrangeHRM')
    });

    it("Test2", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.title().should('eq','OrangeHRM123');
    });

    });