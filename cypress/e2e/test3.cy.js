
describe('My Third Test Suite', () => {

    it('Testing all web page elements - 1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // check/uncheck checkboxes
        cy.get('#checkBoxOption1').check()
        cy.get('#checkBoxOption1').should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck()
        cy.get('#checkBoxOption1').should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        // static dropdown
        cy.get('#dropdown-class-example').select('option3')
        cy.get('#dropdown-class-example').should('have.value', 'option3')
        // dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('#ui-id-1>li').each(($el, i, $list) => {
            if($el.text() === 'India') {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
        // visible/invisible element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        // radio buttons
        cy.get('[value="radio2"]').check()
        cy.get('[value="radio2"]').should('be.checked')

    })
})
