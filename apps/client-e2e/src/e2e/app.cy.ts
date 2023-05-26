describe('client', () => {
  beforeEach(() => cy.visit('/'));

  // Custom command example, see `../support/commands.ts` file
  it('should type a URL and get a short URL', () => {
    cy.get('#url').type('https://youtube.com');
    cy.get('button[type="submit"]').click();
    cy.get('.url-text').should('exist');
  });
});
