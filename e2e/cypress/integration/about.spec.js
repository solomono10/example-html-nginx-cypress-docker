it('loads page', () => {
    cy.visit('/about.html');
    cy.contains('This is the About page');
});
