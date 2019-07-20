import { fillField, clickButton, getError } from "../support/utils"

describe("Sign-up form tests -- unsuccessful", function() {
    beforeEach(() => {
      cy.fixture("signup/signup_creds.json").as("user");
      cy.fixture("signup/signup_validation_msgs.json").as("message");

      cy.visit("/signup")
    });

    afterEach(() => {
      cy.url().should("contain", "/signup")
    })

    it("Displays a message if you try signing up with an email which is already used by another user", function() {

      fillField("#name", this.user.name)
      fillField("#email", this.user.email)
      fillField("#password", this.user.password)
      clickButton("#signup")

      getError().should("contain", this.message.email_taken);
    })
  })