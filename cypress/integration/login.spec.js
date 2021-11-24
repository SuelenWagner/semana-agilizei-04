/// <reference types="cypress" />

/* 
    1. O que está sendo testado? R: Twiter Clone, funcionalidade de Login.
    2. Sob que cirscunstâncias, condições? R: Ao autenticar com credenciais válidas.
    3. Qual o resultado esperado? R: Deve ser direcionado para o feed.

    Ao autenticar com credenciais inválidas, deve permanecer na tela de login e informar uma mensagem de erro.
*/

describe('Twitter Clone - Login', () => {

    // HOOKS -> usa-se o Mocha
        // -> antes de cada ou todos os testes -> beforeEach / before
        // -> depois de cada ou todos os testes -> afterEach / after

    beforeEach(() => {
        //cy.intercept
        //1. RouteMatcher - mapeamento, filtro da rota que a gente quer.
        //2. RouteHandler (opcional) - controlar o que a rota vai retornar (mock).
        // Request URL: https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
        // Request Method: GET

        cy.intercept({
            method: 'GET',
            hostname: 'res.cloudinary.com'
        }, {  
            statusCode: 200,
            fixture: 'agilizei-logo'
        }).as('cloudnary')
    })

    it('Ao autenticar com credenciais válidas, deve ser direcionado ao feed', () => {
        
        cy.login()
        cy.visit('/');
        cy.get('nav ul li').should('be.visible').and('have.length', 6)
        
    });
});
