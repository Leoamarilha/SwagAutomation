const elem = require('./elements').ELEMENTS;

class Login{

    logarEmaileSenha(email,senha){
        cy.get(elem.inp_user)
            .clear()
            .type(email)
        
        cy.get(elem.inp_senha)
            .clear()
            .type(senha)
        
        cy.get(elem.btn_login)
            .click()
    }

    logarSemEmailEsenha(){
        cy.get(elem.btn_login)
        .click()
    }

    validaAcessoInvalido(){
        cy.get(elem.h3_erroLogin)
        .should('contain.text' , 'Epic sadface: Username and password do not match any user in this service')
    }

    validaAcessoInvalidoSemEmailESenha(){
        cy.get(elem.h3_erroLogin)
        .should('contain.text' , 'Epic sadface: Username is required')
    }


}export default new Login();