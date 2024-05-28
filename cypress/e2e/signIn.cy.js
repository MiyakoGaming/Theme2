Cypress.on('uncaught:exception', (err, runnable) => {
  // Fail the test
  throw err;
  // Return false to prevent the error from failing the test in an unexpected way
  return false;
});

it('Sign in',()=>{

cy.visit('https://www.jufsolution1.com')

})