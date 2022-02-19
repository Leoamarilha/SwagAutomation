/// <reference types="cypress" />

import google from '../support/Pages/Google'


describe('Selecionar as redes sociais', () => {

    beforeEach(() => {
        cy.visit('https://www.google.com/');
    });

    it('Fazer uma busca simples no Google', function () {
        google.buscaGoogle();
        google.selecionandoResultado();
        google.validaSiteSelecionado();
    });
    
});