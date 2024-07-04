//1. testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, false)}
//2. testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, true)}
//3. testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password, length validation) , (test case, false)}
//4. testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password) , (test case, true)}
//5. testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password, length validation) , (test case, false)}
//6. testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password) , (test case, true)}
//7. testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, false)}
//8. testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password)) , (test case, true)}
//9. testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password), length validation) , (test case, false)}
//10. testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password)) , (test case, true)}
//11. testChangePassword{(invalid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, false)}
//12. testChangePassword{(invalid current password, invalid length new password (x > 8), invalid retype password (same as new password)) , (test case, true)}
//13. testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, false)}
//14. testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, true)}
//15. testChangePassword{(valid current password, valid new password, invalid retype password (x < 8)) , (test case, false)}
//16. testChangePassword{(valid current password, valid new password, invalid retype password (x < 8)) , (test case, true)}
//17. testChangePassword{(valid current password, valid new password, invalid retype password (x > 8)) , (test case, false)}
//18. testChangePassword{(valid current password, valid new password, invalid retype password (x > 8)) , (test case, true)}
//19. testChangePassword{(valid current password, valid new password, valid retype password, true) , (test case, true)}
//20. testChangePassword{(empty current password, empty new password, empty retype password, current password show message) , (test case, true)}
//21. testChangePassword{(valid current password, empty new password, empty retype password, new password show message) , (test case, true)}
//22. testChangePassword{(valid current password, valid new password, empty retype password, retype password show message) , (test case, true)}

Cypress.on("uncaught:exception", (err, runnable) => {
  // Fail the test
  throw err;
  // Return false to prevent the error from failing the test in an unexpected way
  return false;
});

//Login detail
var validUsername = "mikodemo1002";
var validPassword = "Yes888888";

//Current Password
var currentPassword1 = "Yes888888";
var currentPassword2 = "Apple@678";

//New Password
var newPassword1 = "Apple@678";
var newPassword2 = "Yes888888";
var minInvalidPassword = "abc12";
var maxInvalidPassword = "1111122222333334444455555666667777788888999";

beforeEach(() => {
  cy.Website_Sign_In_Page_URL();
  cy.Sign_In_Account(validUsername, validPassword);
  cy.Click_Profile_Username_To_Account_Page(validUsername)
  cy.My_Account_Page_Label();
  cy.Click_Change_Password_button_In_Account_Page();
});

//testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, false)}
it("Verify change password unsuccessful with invalid current password, valid new & retype password", () => {
  // cy.Insert_Current_Password_Detail_With_Validation(currentPassword2);
  // cy.Insert_New_Password_Detail_With_Validation(newPassword1);
  // cy.Insert_Retype_Password_Detail_With_Validation(newPassword1);
  // cy.Submit_Change_Password();
  // cy.My_Account_Page_Label();
});

// //2. testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, true)}
// it("Verify change password unsuccessful with invalid current password, valid new & retype password", () => {
//   // cy.Insert_Current_Password_Detail_With_Validation(currentPassword2);
//   // cy.Insert_New_Password_Detail_With_Validation(newPassword1);
//   // cy.Insert_Retype_Password_Detail_With_Validation(newPassword1);
//   // cy.Submit_Change_Password();
//   // cy.Current_Password_Error_Message();
// });

// //3. testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password, length validation) , (test case, false)}
// it("Verify change password unsuccessful with invalid min length current password, valid new password", () => {
//   // cy.Insert_Current_Password_Detail_With_Validation(minInvalidPassword);
//   // cy.Insert_New_Password_Detail_With_Validation(newPassword1);
//   // cy.Insert_Retype_Password_Detail_With_Validation(newPassword1);
//   // cy.Submit_Change_Password();
// });

// //testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password, length validation) , (test case, false)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, false)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password)) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password), length validation) , (test case, false)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password)) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(invalid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, false)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(invalid current password, invalid length new password (x > 8), invalid retype password (same as new password)) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, false)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, valid new password, invalid retype password (x < 8)) , (test case, false)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, valid new password, invalid retype password (x < 8)) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, valid new password, invalid retype password (x > 8)) , (test case, false)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, valid new password, invalid retype password (x > 8)) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, valid new password, valid retype password, true) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(empty current password, empty new password, empty retype password, current password show message) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, empty new password, empty retype password, new password show message) , (test case, true)}
// it("Verify change password unsuccessful", () => {});

// //testChangePassword{(valid current password, valid new password, empty retype password, retype password show message) , (test case, true)}
// it("Verify change password unsuccessful", () => {});