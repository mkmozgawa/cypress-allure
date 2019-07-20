import { login, getError } from "../support/utils"

describe('Log-in form tests', function() {
  beforeEach(() => {
    cy.fixture('login/login_creds.json').as('user');
    cy.fixture('login/login_validation_msgs.json').as('message');

    cy.visit('/login')
  });

  afterEach(() => {
    cy.url().should('contain', '/login')
  })

  it('Displays a message if you try logging in with the incorrect password', function() {

    login(this.user.email, this.user.wrong_password)

    getError().should('contain', this.message.wrong_password);
  })
})