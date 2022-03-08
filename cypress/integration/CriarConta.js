/// <reference types="cypress" />

import home from '../support/Pages/Home'
import cadastro from '../support/Pages/Cadastro'

describe('Cadastrar um novo usuário', () => {

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
    });

    it('Efetuar o cadastro de um usuário', function () {
        home.acessarLogin();
        cadastro.criarConta();
    });

});