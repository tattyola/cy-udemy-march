import HomePage from "../pages/home.page";
import ProductPage from "../pages/product.page";

const homePage = new HomePage();
const productPage = new ProductPage();

describe('My Ninth Test Suite', () => {

    before(function () {

        cy.fixture('shoppingData').then(function (data) {

            this.data = data;

        })

    })

    it('Testing e2e - phone shopping', function () {

        Cypress.config('defaultCommandTimeout', 8000)
        cy.visit(Cypress.env('url') + '/angularpractice/')
        homePage.nameInput.type(this.data.name)
        homePage.genderSelect.select(this.data.gender)
        homePage.twoWayDataBindingInput.should('have.value', this.data.name)
        homePage.nameInput.should('have.attr', 'minlength', '2')
        homePage.disabledRadioBtn.should('be.disabled')
        homePage.shopBtn.click()
        // cy.pause()
        this.data.productName.forEach(el => {
            cy.selectProduct(el)
        })
        productPage.checkoutBtn.click()
        let sum = 0;
        cy.get('tr td:nth-child(4) strong').each(function ($el, i, $list) {

            const text = +$el.text().split(' ')[1].trim()
            sum += text;

        })
            // .then(function () {
            //
            //     cy.log(sum)
            //
            // })
        cy.get('h3 strong').then(function (el) {

            const totalText = +el.text().split(' ')[1].trim()
            expect(totalText).to.equal(sum)

        })
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('div .checkbox-primary').click()
        cy.get('[type="submit"]').click()
        cy.get('div .alert-success').should('contain.text', ' Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('div .alert-success').then(function (el) {

            const text = el.text()
            expect(text.includes('Success')).to.be.true

        })

    })
})
