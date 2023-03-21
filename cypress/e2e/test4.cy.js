

describe('My Forth Test Suite', () => {

    it('Testing all web page elements - 2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cypress auto accepts alerts and popups
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        // window:alert
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        // window:confirm
        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        // child tabs
        cy.get('#opentab').invoke('removeAttr', 'target')
        cy.get('#opentab').click()
        cy.url().should('include', 'rahulshettyacademy')
        // go back
        cy.go('back')
        cy.url().should('include', 'AutomationPractice')

    })
})
