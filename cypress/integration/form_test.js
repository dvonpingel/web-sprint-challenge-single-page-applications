describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    });

    const nameInput = () => cy.get('input[name="name"]');
    const pepperoni = () => cy.get('input[name="pepperoni"]');
    const sausage = () => cy.get('input[name="sausage"]');
    const pineapple = () => cy.get('input[name="pineapple"]');
    const dropDown = () => cy.get('select[name="size"]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');

    it('can input text', () => {
        nameInput()
            .should('have.value', '')
            .type("D'Artagnan")
            .should('have.value', "D'Artagnan")
    })

    it('can select multiple toppings', () => {
        pepperoni().click();
        sausage().click();
        pineapple().click();
    })

    it('can submit the form', () => {
        nameInput().type('Dartagnan');
        dropDown().select('10"');
        pepperoni().click();
        sausage().click();
        pineapple().click();
        submitBtn().click();
    })
    
})