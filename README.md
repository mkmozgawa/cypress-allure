# Cypress + Allure

Run Cypress tests and generate Allure reports.

## How to run
1. Clone this repo: `git clone https://github.com/mkmozgawa/cypress-allure.git`
2. Go to its root: `cd cypress-allure`
3. Install the dependencies: `npm ci`
4. Run the existing Trello tests: `npm test`
5. Generate the Allure report: `npm run report`

## Questions?
__But where are your page objects?!__

It's JS and Cypress, not Java and Selenium. [Embrace your functions.](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)