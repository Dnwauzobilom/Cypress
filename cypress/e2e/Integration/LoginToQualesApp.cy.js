///<reference types= "cypress" />
//This is to describe your test suite
describe("Login Test Scenarios to the Quales Learning App", () => {
    //This is where you write your tests.
    it("Validates that a user with correct credentials can login to the Quales Learning App on a desktop viewport", () => {
        //This step visits the Quales learning app
        cy.visit("http://tawdry-rule.surge.sh/");
        //spied on the Sign In button
        cy.get('.css-48p1y4 > .MuiButton-root')
        //Cypress clicks on the element
        .click();
        //Spied on the username input field
        cy.get('[data-testid="EmailAddress"]')
        //Cypress types in the username input field
        .type("ay@mail.com");
        //Spied on the password input field
        cy.get('[data-testid="Password"]')
        //Cypress types in the password input field
        .type("pass1234");
        //Spied on the LOGIN button
        cy.get('.MuiButton-contained')
        //Cypress clicks on the element
        .click();
        //Assertions to confirm that expected outcome is matched or reached.
        cy.contains('Courses')
        //Cypress checks if the element above is available
        .should('be.visible');

        cy.contains('Login Successful')
        .should('be.visible');

        cy.contains('Log Out')
        .should('be.visible');

        cy.contains('Ayobami')
        .should('be.visible');

        cy.get('.MuiGrid-root > .MuiButton-root')
        .should ('be.visible');
    });


    it("Validates that a user with correct credentials can login to the Quales Learning App on an iphone viewport", () => {
       //open application as though it is an iphone 8 device
       cy.viewport('iphone-8');
        //This step visits the Quales learning app
        cy.visit("http://tawdry-rule.surge.sh/");
        cy.get('.css-1lvtzne > .MuiButtonBase-root')
        .click();

        cy.contains('Login')
        .click();
        
        //Spied on the username input field
        cy.get('[data-testid="EmailAddress"]')
        //Cypress types in the username input field
        .type("ay@mail.com");
        //Spied on the password input field
        cy.get('[data-testid="Password"]')
        //Cypress types in the password input field
        .type("pass1234");
        //Spied on the LOGIN button
        cy.get('.MuiButton-contained')
        //Cypress clicks on the element
        .click();
        //Assertions to confirm that expected outcome is matched or reached.
        cy.contains('Courses')
        //Cypress checks if the element above is available
        .should('be.visible');

        cy.contains('Login Successful')
        .should('be.visible');

        cy.contains('Log Out')
        .should('be.visible');

        cy.contains('Ayobami')
        .should('be.visible');

        cy.get('.MuiGrid-root > .MuiButton-root')
        .should ('be.visible');
    });

    it("Validates that a user with correct credentials can login to the Quales Learning App on an iPad Mini viewport", () => { 
        cy.viewport('ipad-mini');
        //This step visits the Quales Learning App
        cy.visit("http://tawdry-rule.surge.sh/");

        cy.get('.css-1lvtzne > .MuiButtonBase-root')
        .click();

        //Cypress clicks login button and fill the input fields
        cy.contains('Login')
        .click();

        cy.get('[data-testid="EmailAddress"]')
        .type('ayp@mail.com');

        cy.get('[data-testid="Password"]')
        .type('pass1234');

        cy.get('.MuiButton-contained')
        .click();

        //cypress adds course by clicking the Add Course button and fill the input fields
        cy.get('.MuiGrid-root > .MuiButton-root')
        .click();

        cy.get('[data-testid="Title*"]')
        .type('Cypress Automation Test');

        cy.get('[data-testid="Description*"]')
        .type('First Test on cypress');

        cy.get('#demo-simple-select')
        .click();

        cy.get('[data-value="3"]')
        .click();

        cy.get('[data-testid="isPremium"]')
        .click();

        cy.get('[data-testid="ImageURL"]')
        .type('https://cdn.shopify.com/s/files/1/1752/6653/products/bald-cypress_1024x1024.jpg?v=1510334890');

        cy.get('[data-testid="online"]')
        .click();

        cy.get('[data-testid="CourseURL*(mustbeyoutube)"]')
        .type('https://www.youtube.com/watch?v=Wsw0pywdR5k&list=PLUDwpEzHYYLseflPNg0bUKfLmAbO2JnE9&index=6');

        cy.get('.css-tzsjye > .MuiButton-root')
        .click();
    });
    });