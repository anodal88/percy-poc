var state={
    endpoint:"https://qa2-web.ncl.com",
    username:'bgesun',
    password:'ncl2011',
    ssoUrl:'qa-sso',
    scripts:{},
    styles:{
        old:[
            '/static/styles/bootstrap.css?v=1549575347489',
            '/assets/v1/styles/redesign.css?v=1549560222567'
        ],
        new:[

        ]
    }
}
describe('@percy/cypress', function () {
    describe('first test', function () {
        it("Does not much", function () {
           
            
            //- visits the home page
            cy.visit(state.endpoint)
            //ScreenShot from the home page
            cy.percySnapshot()

            

            cy.contains('Log in').then(($btn) => {
                if ($btn) {
                //login
                 cy.contains('Log in').click()
                  //Check the right url
                cy.url().should('include', state.ssoUrl)
                cy.wait(500)
                //Authenticate the user
                cy.get("#userName").type(state.username)
                cy.get("#password").type(state.password)
                cy.get('[type=submit]').click()
                } else {
                  console.log("logged in")
                }

                //Click my account to see the bge page
                cy.contains('My Account').click()
              })
        
           
           
        // console.log(state)
        })
    })
})