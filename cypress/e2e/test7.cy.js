

describe('My Seventh Test Suite', () => {

    it('Testing all web page elements - 5', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // new tab
        cy.get('#opentab').then((el) => {

            const url = el.prop('href')
            cy.visit(url)

        })

    })
})
