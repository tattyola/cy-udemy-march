class HomePage{

    get nameInput() { return cy.get('input[name="name"]:nth-child(2)') }
    get twoWayDataBindingInput() { return cy.get('h4 input[name="name"]') }
    get genderSelect() { return cy.get('#exampleFormControlSelect1') }
    get disabledRadioBtn() { return cy.get('#inlineRadio3') }
    get shopBtn() { return cy.get(':nth-child(2) > .nav-link') }
    // get countryInput() { return cy.get('#country') }
}

export default HomePage;
