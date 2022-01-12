const elem = require('./elements').ELEMENTS;

class Home {

    validaAcessoValido() {
        cy.get(elem.div_shoppingCart)
            .should('be.visible');

        cy.url()
            .should('eq', 'https://www.saucedemo.com/inventory.html')
    }

    adicionarProduto() {
        cy.get(elem.btn_onesieAddCard)
            .click();
    }

    adicionarVariosProdutos() {
        cy.get(elem.btn_onesieAddCard)
            .click();

        cy.get(elem.btn_boltAddCard)
            .click();

        cy.get(elem.btn_backPackAddCard)
            .click();
    }

    checkout() {
        cy.get(elem.div_shoppingCart)
            .click();

        cy.get(elem.btn_checkout)
            .click();
    }

    acessarTwitter() {
        cy.get(elem.li_twitter)
            .click();
    }

    acessarFacebook() {
        cy.get(elem.li_facebook)
            .click();
    }

    acessarLinkedin() {
        cy.get(elem.li_linkedin)
            .click();
    }

} export default new Home();