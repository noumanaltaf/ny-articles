const hostUrl = 'http://localhost:3000/';

afterEach(() => {
  cy.wait(2000); // Wait for 2 seconds after each test
});

describe('first article', () => {
  it('exists', () => {
    cy.visit(hostUrl);
    cy.get('[data-testid="article-card"]:first').should('be.visible')
    .should("exist");
  })

  it('click', () => {
    cy.visit(hostUrl);
    cy.get('[data-testid="article-card"]:first').should('be.visible')
    .click(); 
  });
})

