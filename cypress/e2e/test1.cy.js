describe('My First Test Suite', () => {

    it('Testing search engine - groceries shopping - 1', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
            // .then(() => {
            //     console.log('sf')
            // })
        cy.get('@productLocator').find('.product').each(($el, i, $list) => {

            const vegi = $el.find('h4.product-name').text()
            if (vegi.includes('Cashews')) {

                cy.wrap($el).find('button').click()

            }

        })
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand').then((el) => {

            cy.log(el.text())
            expect(el.text()).to.equal('GREENKART')

        })

    })
})
