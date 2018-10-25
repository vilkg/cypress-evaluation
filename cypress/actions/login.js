export default  {
    withCredentials: (username, password) => {
        cy.get("#j_username")
            .type(username);

        cy.get("#j_password")
            .type(password);

        cy.get("#submit")
            .click();
    }
}