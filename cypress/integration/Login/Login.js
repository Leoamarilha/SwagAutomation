/// <reference types="cypress" />

import login from '../../support/Pages/Login'
import home from '../../support/Pages/Home'

describe('Logar na aplicação', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    });

    it('Login válido', function() {
        login.logarEmaileSenha(this.data.emailValido , this.data.passwordValida)
        home.validaAcessoValido()
    });

    it('Login com email e senha inválido', function() {
        login.logarEmaileSenha(this.data.emailInvalido , this.data.passwordInvalida)
        login.validaAcessoInvalido()
    });

    it('Login com email inválido e senha válida', function() {
        login.logarEmaileSenha(this.data.emailInvalido , this.data.passwordValida)
        login.validaAcessoInvalido()
    });

    it('Login sem email e senha', function() {
        login.logarSemEmailEsenha()
        login.validaAcessoInvalidoSemEmailESenha()
    });

});