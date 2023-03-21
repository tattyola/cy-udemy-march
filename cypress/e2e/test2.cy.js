
describe('My Second Test Suite', () => {

    it('Testing e2e - groceries shopping', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').each(($el, i, $list) => {

            const vegi = $el.find('h4.product-name').text()
            if(vegi.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }

        })
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })
})
