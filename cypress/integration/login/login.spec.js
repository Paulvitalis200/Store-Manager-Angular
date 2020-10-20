const { beforeEach, it } = require("mocha")

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

describe("Dashboard", function() {
    Cypress.Commands.add('login', () => { 
        cy.request({
          method: 'POST',
          url: 'https://storemanagerapi2.herokuapp.com/api/v2/auth/login',
          body: {
            
              email: 'vitalispaul48@live.com',
              password: 'manu2012',
            
          }
        })
        .then((resp) => {
          window.localStorage.setItem('token', resp.body.token)
          window.localStorage.setItem('username', resp.body.username)
        })
      
      })

    it("Redirects to homepage without token", () => {
        // cy.login()
        cy.visit('http://localhost:4200/dashboard')
    }) 

    it("Redirects to homepage with token", () => {
        cy.get('input[name=email]').clear()
        cy.get('input[name=password]').clear()
        cy.get('input[name=email]').type('vitalispaul48@live.com')
        cy.get('input[name=password]').type('manu2012')
        cy.get('button')
        .click()
        cy.login()
        cy.visit('http://localhost:4200/dashboard')
    })

    it("Logs out a user", () => {
        cy.login()
        cy.visit('http://localhost:4200/dashboard')
        cy.get(".logout-btn")
        .click()
        cy.clearLocalStorage()
        cy.visit('http://localhost:4200/dashboard')
    })
})