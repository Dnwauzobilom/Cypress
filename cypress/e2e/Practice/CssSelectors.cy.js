///<reference types= "cypress" />

describe("CSSLocators", () => {

    it('Validates that user with an incorrect web link cannot access our webpage', () => {
        cy.visit('https://coreibanking.netlify.app/dashboard/home');
    });

    it('Validates that a user with correct webpage link can access the page', () => {
        cy.visit('https://core-ibanking.netlify.app/dashboard/home');

        cy.contains('Username')
        .should('be.visible');

        cy.contains('Password')
        .should('be.visible');

        cy.contains('Remember for 30 days')
        .should('be.visible');

        cy.contains('.iBwnAK > .sc-ezbkAF')
        .should('be.visible');

        // cy.contains('Welcome back')
        // .should('be.visible');

        cy.contains('Login')
        .should('be.visible');

        // cy.contains('forgot password')
        // .should('be.visible');
    });

    it('Validate that non-MFB customers with an invalid BVN and valid Date of Birth cannot set up Internet Banking from the webpage', () => {
        //Spied on the Setup Internet Banking
        cy.get('.sc-kLwhqv')
        .click();

        cy.get('.eoqyVy')
        .click();

        cy.get('.jtAPqE > .sc-bBHxTw > .sc-fotOHu')
        .click();

        cy.get('.jtAPqE > .sc-bBHxTw > .sc-fotOHu')
        .click();

        //Spied on the BVN input field to input an invalid BVN
        cy.get(':nth-child(1) > input')
        .type('2229801134');
        //Spied on the date of birth input field to input a valid date
        cy.get(':nth-child(2) > input')
        .type('1960-10-01');
        cy.get('.lftSvb')
        .click();
        cy.contains('Kindly provide a valid bvn')
        .should('be.visible');
    });

    it('Validate that non-MFB customers with a invalid BVN and invalid Date of Birth can set up Internet Banking from the webpage', () => {
        //Spied on the Setup Internet Banking
        cy.get('.sc-kLwhqv')
        .click();

        cy.get('.eoqyVy')
        .click();

        cy.get('.jtAPqE > .sc-bBHxTw > .sc-fotOHu')
        .click();

        cy.get('.jtAPqE > .sc-bBHxTw > .sc-fotOHu')
        .click();

        //Spied on the BVN input field to input an invalid BVN
        cy.get(':nth-child(1) > input')
        .type('2229801134');
        //Spied on the date of birth input field to input an invalid date
        cy.get(':nth-child(2) > input')
        .type('1974-07-21');
        cy.get('.lftSvb')
        .click();
        cy.contains('Kindly provide a valid bvn')
        .should('be.visible');
    });

    it('Validate that non-MFB customers with a valid BVN and invalid Date of Birth can set up Internet Banking from the webpage', () => {
        //Spied on the Setup Internet Banking
        cy.get('.sc-kLwhqv')
        .click();

        cy.get('.eoqyVy')
        .click();

        cy.get('.jtAPqE > .sc-bBHxTw > .sc-fotOHu')
        .click();

        cy.get('.jtAPqE > .sc-bBHxTw > .sc-fotOHu')
        .click();

        //Spied on the BVN input field to input a valid BVN
        cy.get(':nth-child(1) > input')
        .type('2229801134');
        //Spied on the date of birth input field to input an invalid date
        cy.get(':nth-child(2) > input')
        .type('1974-07-21');
        cy.get('.lftSvb')
        .click();
        // cy.contains('Kindly provide a valid bvn')
        // .should('be.visible');
    });

});

