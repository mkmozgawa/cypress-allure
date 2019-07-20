export const fillField = (selector, input) => {
    cy.get(selector).type(input)
}

export const clickButton = (selector) => {
    cy.get(selector).click()
}

export const login = (username, password) => {
    fillField("#user", username)
    fillField("#password", password)
    clickButton("#login")
  }

export const getError = () => {
    return cy.get("#error .error-message")
}