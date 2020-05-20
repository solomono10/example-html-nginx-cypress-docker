it('loads page', () => {
    cy.visit('/');
    cy.contains('This is the Homepage');
});
