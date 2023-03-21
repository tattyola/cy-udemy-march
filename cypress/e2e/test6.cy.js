

describe('My Sixth Test Suite', () => {

    it('Testing all web page elements - 4', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // mouse hover 1
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
        // mouse hover 2
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')

    })
})
