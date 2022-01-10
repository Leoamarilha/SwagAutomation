const elem = require('./elements').ELEMENTS;

class Checkout{

    checkoutInfo(firstName, lastName, zipCode){
        cy.get(elem.inp_firstName)
        .clear()
        .type(firstName);

        cy.get(elem.inp_lastName)
        .clear()
        .type(lastName);

        cy.get(elem.inp_zipCode)
        .clear()
        .type(zipCode);

        cy.get(elem.btn_continue)
        .click();
    }

    finalizarCompra(){
        cy.get(elem.btn_finish)
        .click();

        cy.url()
        .should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    }

    validaProduto(){
        cy.get(elem.div_produtoNome)
        .should('contain.text', 'Sauce Labs Onesie');
    }

    validaVariosProdutos(){
        cy.get(elem.div_produtoNome)
        .should('contain.text', 'Sauce Labs Onesie');

        cy.get(elem.div_produtoNome)
        .should('contain.text', 'Sauce Labs Bolt T-Shirt')

        cy.get(elem.div_produtoNome)
        .should('contain.text', 'Sauce Labs Backpack')
    }
    


}export default new Checkout();