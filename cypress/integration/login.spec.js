import Header from '../pageElements/header';

describe("login", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("shows errors when credentials are invalid", () => {
        cy.login("false", "password");

        cy.get("#loginMessage")
            .contains("Invalid login information");
        
    })
    it("works with valid user", () => {
        cy.get("#j_username")
            .type("admin");

        cy.get("#j_password")
            .type("district");
            
        cy.get("#submit")
            .click();

        Header.validatePresence();
    })
})