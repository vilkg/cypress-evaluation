const elements = [
    ".d2-ui-control-bar",
    ".header-logo"
];

export default {
    validatePresence: () => {
        elements.forEach(element => {
            cy.get(element)
                .should("be.visible")
        });

    }
}