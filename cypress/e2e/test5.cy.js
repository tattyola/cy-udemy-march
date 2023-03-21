

describe('My Fifth Test Suite', () => {

    it('Testing all web page elements - 3', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // handling tables
        cy.get('tr td:nth-child(2)').each(($el, i, $list) => {

            const text = $el.text()
            if(text.includes('Python')) {

                cy.get('tr td:nth-child(2)').eq(i).next('td').then((price) => {

                    const priceText = price.text()
                    expect(priceText).to.equal('25')

                })

            }

        })

    })
})
