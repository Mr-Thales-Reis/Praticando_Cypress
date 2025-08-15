describe(' Refatore os testes já realizados aplicando o método beforeEach().', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('deve  clicar no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.get('.button').click()     
       
    });

    it("deve testar os botão de home", ()=>{
       cy.get('.header__home').click()  

    })

    it("Deve testar os botão de mensagens", ()=>{
        cy.get('.header__message').click()  
    })

    it("Visita a página de /login do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })

    it("Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

    it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()  
    })
    
});

describe('Visite a página principal do AdoPet', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Verifique se o title com o texto “AdoPet” está presente no html.', () => {
        cy.title().should('eq', 'AdoPet');
    })
    it("Verifique se o texto “Quem ama adota!” está presente no html.", () => {
        cy.contains('p', 'Quem ama adota!').should('be.visible')
    })
    it("verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.", () =>{
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!' ).should('be.visible');
    })
    it("Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.", () =>{
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type("João@email.com");
        cy.get('[data-test="input-loginPassword"]').type("Senha1234");
    })
});


