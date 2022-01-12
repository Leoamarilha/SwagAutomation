/// <reference types="cypress" />

import login from '../../support/Pages/Login'
import home from '../../support/Pages/Home'
import checkout from '../../support/Pages/Checkout'

describe('Adicionar um ou mais produto no carrinho', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('Massa').then(function (data) {
            this.data = data;
            login.logarEmaileSenha(this.data.emailValido, this.data.passwordValida)
            home.validaAcessoValido()
        });

    });

    it('Finalizar uma compra com 1 produto', function () {
        home.adicionarProduto();
        home.checkout();
        checkout.checkoutInfo(this.data.firstName, this.data.lastName, this.data.zipCode)
        checkout.validaProduto();
        checkout.finalizarCompra();
    });

    it('Finalizar uma compra com mais de 1 produto', function () {
        home.adicionarVariosProdutos();
        home.checkout();
        checkout.checkoutInfo(this.data.firstName, this.data.lastName, this.data.zipCode)
        checkout.validaProduto();
        checkout.finalizarCompra();
    });

});