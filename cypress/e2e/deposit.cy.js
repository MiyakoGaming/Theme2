//1. testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}
//testDeposit{() , (test case, true)}

Cypress.on("uncaught:exception", (err, runnable) => {
  // Fail the test
  throw err;
  // Return false to prevent the error from failing the test in an unexpected way
  return false;
});

//Login detail
var validUsername = "mikodemo1002";
var validPassword = "Yes888888";

beforeEach(() => {
  cy.Website_Sign_In_Page_URL();
  cy.Sign_In_Account(validUsername, validPassword);
});
