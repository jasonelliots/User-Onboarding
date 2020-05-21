// Get the Name input and type a name in it.
// Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// Get the Email input and type an email address in it
// Get the password input and type a password in it

// Set up a test that will check to see if a user can check the terms of service box

// Check to see if a user can submit the form data

// Check for form validation if an input is left empty

describe('Form Inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })
    it('Can receive a name', () => {
        cy.get('input[name="name"]')
            .type('Jason')
            .should('have.value', 'Jason')
    })
    it('Can receive an email', () => {
        cy.get('input[name="email"]')
            .type('jason@jason.com')
    })
    it('Can receive a password', () => {
        cy.get('input[name="password"]')
            .type('12345')
    })

    it('Can check the checkbox', () => {
        cy.get('input[name="termsOfService"]').click()

    })

    it('Can submit', () => {
        cy.get('button').click()
    })

})

describe('Form validation', () => {
    it('returns form errors', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[name="email"]')
        .type('jshfds')
        cy.contains('The email must be a valid email address')
    })
})

