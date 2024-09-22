// /// <reference types="cypress" />

// import { getRandomUserWithFirstName } from "../../generators/userGenerator"
// import { registerPage } from "../../pages/registerPage"
// import { loginResponseFrom } from "../../utils/loginResponseUtil"
// import users from "../../fixtures/users.json"
// import { loginMocks } from "../../mocks/loginMocks"
// import { usersMocks } from "../../mocks/usersMocks"
// import { registerMocks } from "../../mocks/registerMocks"

// describe('Login page tests is isolation', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })

//   it.only('should login successfully', () => {
//     // given
//     const firstName = 'Slawomir'
//     const user = getRandomUserWithFirstName(firstName)
//     registerMocks.mockSuccess(user)
    
//     // when
//     registerPage.attemptRegister(user.username, user.password)

//     // then
//     cy.url().should('contain', 'login')
//     cy.get('.alert-success').should('have.text', 'Registration successful')

//     cy.percySnapshot('HomescreenRegisterSuccess')
//   })

//   it('should fail to login', () => {
//     // given
//     const errorMessage = 'Invalid username/password supplied'
//     loginMocks.mockFailure(errorMessage)

//     // when
//     cy.get('.form-control').should('have.length', 2)
//     cy.percySnapshot('LoginPage')
//     loginPage.attemptLogin('wrong', 'wrong')

//     // then
//     cy.get('.alert-danger').should('have.text', errorMessage)
//   })

//   it('should open register page', () => {
//     // when
//     loginPage.clickRegister()

//     // then
//     cy.url().should('contain', 'register')
//     cy.get('.form-control').should('have.length', 5)
//     cy.percySnapshot('RegisterPage')
//   })

// })