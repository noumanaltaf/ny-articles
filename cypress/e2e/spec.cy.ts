const hostUrl = 'http://localhost:3000/';

afterEach(() => {
  cy.wait(2000); // Wait for 2 seconds after each test
});

describe('first article', () => {
  it('exists', () => {
    cy.wait(3000);
    cy.visit(hostUrl);
    cy.get('[data-testid="article-card"]:first')
    .should("exist")
    .should('be.visible');
  })

  it('click', () => {
    cy.wait(3000);
    cy.visit(hostUrl);
    cy.get('[data-testid="article-card"]:first')
    .should("exist")
    .should('be.visible')
    .click(); 
  });
})

