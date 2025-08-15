describe('Exercícios da etapa 1 do curso de cypress', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
  it("Clica no botão: Ver pets disponíveis para adoção", () =>{
    cy.get('.button').click();
  })
  it(" testar os botões header", () => {
    cy.get('.header__message').click();
    cy.get('.header__home').click();
  })
  it("Visite a página de /login do Adopet", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');

  })
  it("Visite a página de /home do Adopet", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get(':nth-child(1) > .card__contact').click();
  })
})