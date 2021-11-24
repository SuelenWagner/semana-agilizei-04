//código que serve para documentar os novos comandos
declare namespace Cypress {
    interface Chainable {

    /**
       * @example cy.login()
       */
    login(): void

    /**
       * @example cy.token()
       */

    token(): void

    }
}