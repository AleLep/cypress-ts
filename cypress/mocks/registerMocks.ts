import { FailedLoginResponse } from "../types/loginTypes"
import { User } from "../types/registerTypes"
import { loginResponseFrom } from "../utils/loginResponseUtil"


export const registerMocks = {

    mockSuccess: (user: User) => {
        cy.intercept('POST', '**/users/signup', {
            statusCode: 201,
            body: {
                "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2Rhc2RhcyIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfQ0xJRU5UIn1dLCJpYXQiOjE3MjcwMDYyNzksImV4cCI6MTcyNzAwNjU3OX0.47F0qOmQ0C0pdPmDqEFCqru7Rw1T_L9vy_UIMqzuo44"
            }
        })
    },

    mockFailure: (errorMessage: string) => {
        cy.intercept('POST', '**/users/signin', {
            statusCode: 422,
            body: getFailedLoginBody(errorMessage)
        })
    }

}

const getFailedLoginBody = (errorMessage: string): FailedLoginResponse => {
    return {
        timestamp: "2024-09-22T06:40:18.370+00:00",
        status: 422,
        error: "Unprocessable Entity",
        message: errorMessage,
        path: "/users/signin"
    }
}