const elem = require('./elements').ELEMENTS;

class Google {



    buscaGoogle() {
        cy.get(elem.inp_buscaGoogle)
            .clear()
            .type('O que é QA{enter}')
    }

    selecionandoResultado(){
        cy.get(elem.href_pesquisaGoogel)
            .click()
    }

    validaSiteSelecionado(){
        cy.url()
            .should('eq', 'https://kalendae.com.br/blog/quality-assurance/');
    }

} export default new Google();