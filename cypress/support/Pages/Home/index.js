const elem = require('./elements').ELEMENTS;

class Home{

    validaAcessoValido(){
            cy.get(elem.div_shoppingCart)
            .should('be.visible');
    
            cy.url()
            .should('eq', 'https://www.saucedemo.com/inventory.html')
    }


}export default new Home();