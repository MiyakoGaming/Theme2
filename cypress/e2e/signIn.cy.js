//1. testSignIn{(valid username, valid password, true) , (test case, true)}
//2. testSignIn{(valid username, valid password, true) , (test case, false)}
//3. testSignIn{(valid username, invalid password, false) , (test case, false)}
//4. testSignIn{(invalid username, valid password, false) , (test case, false)}
//5. testSignIn{(invalid username, invalid password, false) , (test case, false)}
//6. testSignIn{(invalid username, invalid password, false) , (test case, true)}

Cypress.on("uncaught:exception", (err, runnable) => {
  // Fail the test
  throw err;
  // Return false to prevent the error from failing the test in an unexpected way
  return false;
});

//Login detail
var validUsername = "mikodemo1002";
var validPassword = "Yes888888";
var invalidUsername = "mickey678";
var invalidPassword = "yes789631";

beforeEach(() => {
  cy.Website_Homepage_URL()
  cy.Click_Sign_In_Button();
  cy.Sign_In_Page_Label();
});

// testSignIn{(valid username, valid password, true) , (test case, true)}
it.skip("Verify successful user authentication with valid username and password .skip()", () => {
  cy.Sign_In_Account(validUsername, validPassword);
  cy.Profile_Username(validUsername);
});

//testSignIn{(valid username, valid password, true) , (test case, false)}
it.skip("Verify unsuccessful user authentication with valid username and password .skip()", () => {
  cy.Sign_In_Account(validUsername, validPassword);
  cy.Profile_Username(invalidUsername);
});

//testSignIn{(valid username, invalid password, false) , (test case, false)}
it("Verify unsuccessful user authentication with valid username and invalid password", () => {
  cy.Sign_In_Account(validUsername, invalidPassword);
  cy.Profile_Username(validUsername);
});

//testSignIn{(invalid username, valid password, false) , (test case, false)}
it("Verify unsuccessful user authentication with invalid username and valid password", () => {
  cy.Sign_In_Account(invalidUsername, validPassword);
  cy.Profile_Username(validUsername);
});

//testSignIn{(invalid username, invalid password, false) , (test case, false)}
it("Verify unsuccessful user authentication with invalid username and password", () => {
  cy.Sign_In_Account(invalidUsername, invalidPassword);
  cy.Profile_Username(validUsername);
});

//testSignIn{(invalid username, invalid password, false) , (test case, true)}
it("Verify unsuccessful user authentication with invalid username and password", () => {
  cy.Click_Sign_In_Button();
  cy.Sign_In_Page_Label();
  cy.Sign_In_Account(invalidUsername, invalidPassword);
  cy.Show_Sign_In_Error_Pop_Up();
  cy.Close_Sign_In_Error_Pop_Up();
});
