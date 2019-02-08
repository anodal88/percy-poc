describe('first test',function(){
    it("Does not much",function(){
        var state={
            index:"http://localhost:10800/percy-poc/index.html",
            checkoutPg:'checkout.html',
            contactPg:'contact.html',
            clientFirstName:"Antonio",
            clientLastName:"Nodal",
            contactUsText:"Contact Us"
        }        
        //- visits the home page
        cy.visit(state.index)
        //- click on a link
        cy.contains('Checkout').click()
        //- do a test assertion about the content
        cy.url().should('include',state.checkoutPg)
        //- fill first and Last name
        cy.get('#firstName')
            .type(state.clientFirstName)
            .should('have.value',state.clientFirstName)
        cy.contains(state.contactUsText).click()  
        cy.url().should('include',state.contactPg)
        cy.contains('Home').click()
    })
})