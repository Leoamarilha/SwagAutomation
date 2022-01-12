/// <reference types="cypress" />

import login from '../support/Pages/Login'
import home from '../support/Pages/Home'

describe('Selecionar as redes sociais', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('Massa').then(function (data) {
            this.data = data;
            login.logarEmaileSenha(this.data.emailValido, this.data.passwordValida);
            home.validaAcessoValido();
        });

    });

    it('Acessar a rede social Twitter', function () {
        home.acessarTwitter();
    });
    
    it('Acessar a rede social Facebook', function () {
        home.acessarFacebook();
    });

    it('Acessar a rede social Linkedin', function () {
        home.acessarLinkedin();
    });
});