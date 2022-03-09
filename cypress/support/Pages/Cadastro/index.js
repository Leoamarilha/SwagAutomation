const elem = require('./elements').ELEMENTS;
const { faker } = require('@faker-js/faker');

class Cadastro {

    criarConta() {
        const email = faker.internet.email();

        cy.get(elem.inp_email)
            .type(email);

        cy.get(elem.btn_createAccount)
            .click();
        
        cy.get(elem.inp_genderMr)
            .click();
        
        cy.get(elem.inp_firstName)
            .type(faker.name.firstName());
        
        cy.get(elem.inp_lastName)
            .type(faker.name.lastName());
        
        cy.get(elem.inp_password)
            .type(faker.internet.password());

        cy.get(elem.div_day)
            .click();
        cy.get(elem.div_daySelecionado)
            .click();
        cy.get(elem.div_month)
            .click();
        cy.get(elem.div_monthSelecionado)
            .click();
        cy.get(elem.div_year)
            .click();
        cy.get(elem.div_yearSelecionado)
            .click();
    }

} export default new Cadastro();