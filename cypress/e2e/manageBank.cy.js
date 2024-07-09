//1. testManageBank{(Click See all button in withdraw page --> My Bank Accounts page --> Click '+' icon --> Link a bank account page) , (test case, true)}
//2. testManageBank{(Click '+' icon in withdraw page --> Link a bank account page) , (test case, true)}
//3. testManageBank{(Click Manage Banks in Account Page --> My Bank Accounts page --> Click '+' icon --> Link a bank account page) , (test case, true)}
//4. testManageBank{(Select bank, empty Account Number) , (test case, true)}
//5. testManageBank{(Select bank, insert invalid min Account Number) , (test case, true)}
//6. testManageBank{(Select bank, insert invalid max Account Number) , (test case, true)}
//7. testManageBank{(Show message when Link a bank account page reach max limit) , (test case, true)}
//8. testManageBank{(Show message when Link a bank account page add duplicate Account Number) , (test case, true)}
//9. testManageBank{(Add bank successfully with valid account number) , (test case, true)}
//11. testManageBank{(Delete bank in My Bank Accounts --> Click 'No' button in Delete Bank Pop up) , (test case, true)}
//12. testManageBank{(Delete bank in My Bank Accounts --> Click 'Delete bank' button in Delete Bank Pop up) , (test case, true)}

Cypress.on("uncaught:exception", (err, runnable) => {
  // Fail the test
  throw err;
  // Return false to prevent the error from failing the test in an unexpected way
  return false;
});

//Login detail
var validUsername = "mikodemo1002";
var validPassword = "Yes888888";

//Account Number
var validAccNumber1 = "1046633887332";
var validAccNumber2 = "aabb12$$%^&*";
var dupliacteNumber = "104663388794";
var invalidMinAccNumber = "1234";
var invalidMaxAccNumber = "12345aaaaabbbbb#######";

beforeEach(() => {
  cy.Website_Sign_In_Page_URL();
  cy.Sign_In_Account(validUsername, validPassword);
  cy.Click_Profile_Username_To_Account_Page(validUsername);
});

//testManageBank{(Click See all button in withdraw page --> My Bank Accounts page --> Click '+' icon --> Link a bank account page) , (test case, true)}
it.skip('Go to Link a bank account page from withdraw page "See all" button', () => {
  cy.My_Account_Page_Label();
  cy.Click_Account_Page_Withdraw_Icon();
  cy.Withdraw_Page_Label();
  cy.Click_See_All_Button_In_Withdraw_Page_To_My_Bank_Account_Page();
  cy.Manage_Bank_Page_Label();
  cy.Click_Add_Icon_In_My_Bank_Account_Page_To_Link_Bank_Account_Page();
  cy.Link_A_Bank_Account_Page_Label();
});

//testManageBank{(Click '+' icon in withdraw page --> Link a bank account page) , (test case, true)}
it.skip("Go to Link a bank account page from withdraw page", () => {
  cy.My_Account_Page_Label();
  cy.Click_Account_Page_Withdraw_Icon();
  cy.Withdraw_Page_Label();
  cy.Click_Add_Icon_In_Withdraw_Page_To_Link_Bank_Account_Page();
  cy.Link_A_Bank_Account_Page_Label();
});

//testManageBank{(Click Manage Banks in Account Page --> My Bank Accounts page --> Click '+' icon --> Link a bank account page) , (test case, true)}
it.skip("Go to Link a bank account page from Account page", () => {
  cy.Scroll_Down_Bottom_Navigation_Section_In_Account_Page();
  cy.Click_Manage_Banks_Button_In_My_Account_Page();
  cy.Manage_Bank_Page_Label();
  cy.Click_Add_Icon_In_My_Bank_Account_Page_To_Link_Bank_Account_Page();
  cy.Link_A_Bank_Account_Page_Label();
});

//testManageBank{(Select bank, empty Account Number) , (test case, true)}
it.skip("Verify add bank unsuccessful with empty Account Number", () => {
  cy.Scroll_Down_Bottom_Navigation_Section_In_Account_Page();
  cy.Click_Manage_Banks_Button_In_My_Account_Page();
  cy.Manage_Bank_Page_Label();
  cy.Click_Add_Icon_In_My_Bank_Account_Page_To_Link_Bank_Account_Page();
  cy.Link_A_Bank_Account_Page_Label();
  cy.Click_Bank_Container();
  cy.Click_Maybank_In_Bank_List();
  cy.Click_Link_Bank_Account_Button();
  cy.Account_Number_Validation_Message();
});

//testManageBank{(Select bank, insert invalid min Account Number) , (test case, true)}
it.skip("Verify add bank unsuccessful with invalid min Account Number (x < 5)", () => {
  cy.Scroll_Down_Bottom_Navigation_Section_In_Account_Page();
  cy.Click_Manage_Banks_Button_In_My_Account_Page();
  cy.Manage_Bank_Page_Label();
  cy.Click_Add_Icon_In_My_Bank_Account_Page_To_Link_Bank_Account_Page();
  cy.Link_A_Bank_Account_Page_Label();
  cy.Click_Bank_Container();
  cy.Click_Maybank_In_Bank_List();
  cy.Insert_Account_Number_In_Account_Number_container(invalidMinAccNumber);
  cy.Click_Link_Bank_Account_Button();
  cy.Account_Number_Error_message();
});

//testManageBank{(Select bank, insert invalid max Account Number) , (test case, true)}
it.skip("Verify add bank unsuccessful with invalid max Account Number (x > 20)", () => {
  cy.Scroll_Down_Bottom_Navigation_Section_In_Account_Page();
  cy.Click_Manage_Banks_Button_In_My_Account_Page();
  cy.Manage_Bank_Page_Label();
  cy.Click_Add_Icon_In_My_Bank_Account_Page_To_Link_Bank_Account_Page();
  cy.Link_A_Bank_Account_Page_Label();
  cy.Click_Bank_Container();
  cy.Click_Maybank_In_Bank_List();
  cy.Insert_Account_Number_In_Account_Number_container(invalidMaxAccNumber);
  cy.Click_Link_Bank_Account_Button();
  cy.Account_Number_Error_message();
});

//testManageBank{(Show message when Link a bank account page reach max limit ) , (test case, true)}
it.skip("Verify add bank unsuccessful when Link a bank account page reach max limit", () => {
  cy.Scroll_Down_Bottom_Navigation_Section_In_Account_Page();
  cy.Click_Manage_Banks_Button_In_My_Account_Page();
  cy.Manage_Bank_Page_Label();
  cy.Click_Add_Icon_In_My_Bank_Account_Page_To_Link_Bank_Account_Page();
  cy.Link_A_Bank_Account_Page_Label();
  cy.Link_A_bank_account_Page_Reach_Limit_Message();
});

//testManageBank{(Show message when Link a bank account page add duplicate Account Number) , (test case, true)}
it.skip("Verify add bank unsuccessful with duplicate valid Account Number", () => {
  cy.Scroll_Down_Bottom_Navigation_Section_In_Account_Page();
  cy.Click_Manage_Banks_Button_In_My_Account_Page();
  cy.Manage_Bank_Page_Label();
  cy.Click_Add_Icon_In_My_Bank_Account_Page_To_Link_Bank_Account_Page();
  cy.Link_A_Bank_Account_Page_Label();
  cy.Click_Bank_Container();
  cy.Click_Maybank_In_Bank_List();
  cy.Insert_Account_Number_In_Account_Number_container(dupliacteNumber);
  cy.Click_Link_Bank_Account_Button();
  cy.Duplicate_Account_Number_Error_Message();
  cy.Close_Duplicate_Account_Number_Error_Message();
});

//testManageBank{(Add bank successfully with valid account number) , (test case, true)}
it("Verify add bank successful with valid Account Number", () => {
  cy.Scroll_Down_Bottom_Navigation_Section_In_Account_Page();
  cy.Click_Manage_Banks_Button_In_My_Account_Page();
  cy.Manage_Bank_Page_Label();
  cy.Click_Add_Icon_In_My_Bank_Account_Page_To_Link_Bank_Account_Page();
  cy.Link_A_Bank_Account_Page_Label();
  cy.Click_Bank_Container();
  cy.Click_Maybank_In_Bank_List();
  cy.Insert_Account_Number_In_Account_Number_container(validAccNumber1);
  cy.Click_Link_Bank_Account_Button();
  cy.Link_A_Bank_Account_Page_Label();
});

//testManageBank{(Delete bank in My Bank Accounts --> Click 'No' button in Delete Bank Pop up) , (test case, true)}
it.skip("Verify cancel delete bank in My Bank Account Page", () => {
  cy.Scroll_Down_Bottom_Navigation_Section_In_Account_Page();
  cy.Click_Manage_Banks_Button_In_My_Account_Page();
  cy.Manage_Bank_Page_Label();
  cy.Point_And_Click_Delete_Icon();
  cy.Click_No_Button_In_Delete_bank_Pop_Up()
});

//testManageBank{(Delete bank in My Bank Accounts --> Click 'Delete bank' button in Delete Bank Pop up) , (test case, true)}
it.skip("Verify delete bank successful in My Bank Account Page", () => {
    cy.Scroll_Down_Bottom_Navigation_Section_In_Account_Page();
    cy.Click_Manage_Banks_Button_In_My_Account_Page();
    cy.Manage_Bank_Page_Label();
    cy.Point_And_Click_Delete_Icon();
    cy.Click_Delete_bank_Button_In_Delete_bank_Pop_Up()
  });