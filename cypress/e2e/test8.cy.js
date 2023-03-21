import 'cypress-iframe'

describe('My Eighth Test Suite', () => {

    it('Testing all web page elements - 6', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // iframe
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        // cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2) // to fix

    })
})
