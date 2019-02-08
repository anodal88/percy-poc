describe('@percy/cypress', function() {
    describe('first test',function(){
        it("Does not much",function(){
            var state={
                index:"http://localhost:10800/percy-poc/pages/index.html",
                checkoutPg:'checkout.html',
                contactPg:'contact.html',
                clientFirstName:"Antonio",
                clientLastName:"Nodal",
                contactUsText:"Contact Us"
            }   
            //- visits the home page
            cy.visit(state.index)
            //take an snapshot
            //cy.screenshot()
            // Take a snapshot for visual diffing
            cy.percySnapshot('test1')
            cy.percySnapshot('test2')
            console.log("here")    
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
})
