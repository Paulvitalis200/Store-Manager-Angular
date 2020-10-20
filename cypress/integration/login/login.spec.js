const { beforeEach } = require("mocha")

describe('Login', function() {
    it("Successfully loads", () => {
        cy.visit('http://localhost:4200')
    }) 

    it("Fails to click the button if no input is provided", () => {
        cy.get('input[name=email]')
        cy.get('input[name=password]')
        cy.get('button')
        .should('be.disabled')
    })

    it("Fails to log in a user", () => {
        cy.get('input[name=email]').type('eemail')
        cy.get('input[name=password]').type('sjfkdajdksf')
        cy.get('button')
        .click()
    })

    it("Successfully logs in a user", () => {
        cy.get('input[name=email]').clear()
        cy.get('input[name=password]').clear()
        cy.get('input[name=email]').type('vitalispaul48@live.com')
        cy.get('input[name=password]').type('manu2012')
        cy.get('button')
        .click()
    })
})