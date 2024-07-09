//Website Homepage URL
Cypress.Commands.add("Website_Homepage_URL", () => {
  cy.visit("https://www.jufsolution1.com");
});

//Website Sign In Page URL
Cypress.Commands.add("Website_Sign_In_Page_URL", () => {
  cy.visit("https://www.jufsolution1.com/auth/signin?redirect=/");
});

//Click Sign In Button
const signInButton = ".top-nav-bar_signIn__rBY06";
var signInButtonText = "Sign In";

Cypress.Commands.add("Click_Sign_In_Button", () => {
  cy.get(signInButton).should("have.text", signInButtonText);
  cy.get(signInButton).click();
});

//Sign In Page Label & description
const signInPageLabel = ".auth_title__fUUXl";
const signInDescription = ".auth_desc__9UuBw";
var signInPageLabelText = "Sign In";
var signInDescriptionText = "Login to your account to start playing.";

Cypress.Commands.add("Sign_In_Page_Label", () => {
  cy.get(signInPageLabel).should("have.text", signInPageLabelText);
  cy.get(signInDescription).should("have.text", signInDescriptionText);
});

//Sign In Account
const usernameInputContainer = ".inputs_textContainer__jgrCl > input";
const passwordInputContainer = ".inputs_inputContainer__MQFfH > input";
const signInPageButton = "form > .TT__standard-button";
var signInPageButtonText = "Sign In";

Cypress.Commands.add("Sign_In_Account", (username, password) => {
  cy.get(usernameInputContainer).type(username);
  cy.get(passwordInputContainer).type(password);
  cy.get(signInPageButton).should("have.text", signInPageButtonText);
  cy.get(signInPageButton).click();
});

//Sign In Account unsuccessfully and show error message pop up
const signInErrorPopUp = ".modal_message__hHpBD";
const closeSignInErrorPopUp = ".modal_action__0o7AY > .TT__standard-button";
var signInErrorPopUpText = "Either username or password is incorrect";
var closeSignInErrorPopUpText = "Okay";

Cypress.Commands.add("Show_Sign_In_Error_Pop_Up", () => {
  cy.get(signInErrorPopUp).should("have.text", signInErrorPopUpText);
});

Cypress.Commands.add("Close_Sign_In_Error_Pop_Up", () => {
  cy.get(closeSignInErrorPopUp).should("have.text", closeSignInErrorPopUpText);
  cy.get(closeSignInErrorPopUp).click();
});

//Profile Username and Click Profile Username --> My Account Page
const profileUsername = ".user-quick-view_playerMainContent__2m3o2 > div";

Cypress.Commands.add("Profile_Username", (username) => {
  cy.get(profileUsername).should("have.text", username);
});

Cypress.Commands.add("Click_Profile_Username_To_Account_Page", (username) => {
  cy.get(profileUsername).should("have.text", username);
  cy.get(profileUsername).click({ force: true });
});

//My account Page Label
const myAccountPageLabel = ".account_pageTitle__CCfxq";
var myAccountPageLabelText = "Welcome back,";

Cypress.Commands.add("My_Account_Page_Label", () => {
  cy.get(myAccountPageLabel).should("have.text", myAccountPageLabelText);
});

//Scroll down Account Page
const referralSectionInAccountPage = ".referral-summary_container__i8Im7";
const recentTransactionInAccountPage = ".recent-transactions_container__8xT68";
const bottomNavigationInAccountPage = ".account_bottom__8ZPh5";

Cypress.Commands.add("Scroll_Down_Referral_Section_In_Account_Page", () => {
  cy.get(referralSectionInAccountPage).scrollIntoView();
});

Cypress.Commands.add(
  "Scroll_Down_Recent_Transaction_Section_In_Account_Page",
  () => {
    cy.get(recentTransactionInAccountPage).scrollIntoView();
  }
);

Cypress.Commands.add(
  "Scroll_Down_Bottom_Navigation_Section_In_Account_Page",
  () => {
    cy.get(bottomNavigationInAccountPage).scrollIntoView();
  }
);

//Change Password Page Label
const changePasswordPageLabel = ".change-password_pageTitle__Ic892";
var changePasswordPageLabelText = "Change Password";

Cypress.Commands.add("Change_Password_Page_Label", () => {
  cy.get(changePasswordPageLabel).should(
    "have.text",
    changePasswordPageLabelText
  );
});

//Click Change Password in Account page
const changePasswordButton =
  ".account_list__QoL5F > .account_listItem__oN568:nth-child(2)";
var changePasswordButtonText = "Change password";

Cypress.Commands.add("Click_Change_Password_button_In_Account_Page", () => {
  cy.get(changePasswordButton).should("have.text", changePasswordButtonText);
  cy.get(changePasswordButton).click();
});

//Change password insert current password detail and validation message
const currentPasswordContainer = "#currentPassword";

Cypress.Commands.add(
  "Insert_Current_Password_Detail_With_Validation",
  (currentPassword) => {
    cy.get(currentPasswordContainer).click();
    cy.get(currentPasswordContainer).type(currentPassword);
    cy.get(currentPasswordContainer)
      .invoke("val")
      .should("eq", currentPassword)
      .and("have.length.gte", 8)
      .and("have.length.lte", 40);
  }
);

Cypress.Commands.add(
  "Insert_Current_Password_Detail_Without_Validation",
  (currentPassword) => {
    cy.get(currentPasswordContainer).click();
    cy.get(currentPasswordContainer).type(currentPassword);
  }
);

Cypress.Commands.add("Current_Password_Validation_Message", () => {
  cy.get(currentPasswordContainer)
    .invoke("prop", "validationMessage")
    .should("equal", "Please fill out this field.");
});

//Change password insert new password detail and validation message
const newPasswordContainer = "#newPassword";

Cypress.Commands.add(
  "Insert_New_Password_Detail_With_Validation",
  (newPassword) => {
    cy.get(newPasswordContainer).click();
    cy.get(newPasswordContainer).type(newPassword);
    cy.get(newPasswordContainer)
      .invoke("val")
      .should("eq", newPassword)
      .and("have.length.gte", 8)
      .and("have.length.lte", 40);
  }
);

Cypress.Commands.add(
  "Insert_New_Password_Detail_Without_Validation",
  (newPassword) => {
    cy.get(newPasswordContainer).click();
    cy.get(newPasswordContainer).type(newPassword);
  }
);

Cypress.Commands.add("New_Password_Validation_Message", () => {
  cy.get(newPasswordContainer)
    .invoke("prop", "validationMessage")
    .should("equal", "Please fill out this field.");
});

//Change password insert retype password detail and validation message
const retypePasswordContainer = "#repeatNewPassword";

Cypress.Commands.add(
  "Insert_Retype_Password_Detail_With_Validation",
  (retypePassword) => {
    cy.get(retypePasswordContainer).click();
    cy.get(retypePasswordContainer).type(retypePassword);
    cy.get(retypePasswordContainer)
      .invoke("val")
      .should("eq", retypePassword)
      .and("have.length.gte", 8)
      .and("have.length.lte", 40);
  }
);

Cypress.Commands.add(
  "Insert_Retype_Password_Detail_Without_Validation",
  (retypePassword) => {
    cy.get(retypePasswordContainer).click();
    cy.get(retypePasswordContainer).type(retypePassword);
  }
);

Cypress.Commands.add("Retype_Password_Validation_Message", () => {
  cy.get(retypePasswordContainer)
    .invoke("prop", "validationMessage")
    .should("equal", "Please fill out this field.");
});

//Submit change password detail
const submitChangePassword =
  ".change-password_actionContainer__fu5e5 > .TT__standard-button";
var submitChangePasswordText = "Change password";

Cypress.Commands.add("Submit_Change_Password", () => {
  cy.get(submitChangePassword).should("have.text", submitChangePasswordText);
  cy.get(submitChangePassword).click();
});

//Error message below current Password
const passwordErrorMessage = ".inputs_error__MFgZN";
var errorCurrentPasswordText = "Incorrect password";
var errorNewPasswordText = "The password must be more than 8 characters.";
var errorRetyprPasswordText = "Doesn't match the new password.";

Cypress.Commands.add("Current_Password_Error_Message", () => {
  cy.get(passwordErrorMessage).should("have.text", errorCurrentPasswordText);
});

Cypress.Commands.add("New_Password_Error_Message", () => {
  cy.get(passwordErrorMessage).should("have.text", errorNewPasswordText);
});

Cypress.Commands.add("Retype_Password_Error_Message", () => {
  cy.get(passwordErrorMessage).should("have.text", errorRetyprPasswordText);
});

//Click Account Page Withdraw Icon --> Withdraw Page
const goToWithdrawIcon = ".actions-bar_action__DNPjc:nth-child(4)";

Cypress.Commands.add("Click_Account_Page_Withdraw_Icon", () => {
  cy.get(goToWithdrawIcon).click();
});

//Click "Manage Bank" in My Account Page --> My Bank Account Page
const manageBankButton =
  ".account_list__QoL5F > .account_listItem__oN568:nth-child(1)";
var manageBankButtonText = "Manage Banks";

Cypress.Commands.add("Click_Manage_Banks_Button_In_My_Account_Page", () => {
  cy.get(manageBankButton).should("have.text", manageBankButtonText);
  cy.get(manageBankButton).click();
});

//Withdraw Page Label
const withdrawPageLabel = ".withdraw_title___Mxpi";
var withdrawPageLabelText = "Withdraw";

Cypress.Commands.add("Withdraw_Page_Label", () => {
  cy.get(withdrawPageLabel).should("have.text", withdrawPageLabelText);
});

//Manage Bank Page Label
const manageBankPageLabel = ".banks_sectionTitle__VyJQW";
var manageBankPageLabelText = "My bank accounts";

Cypress.Commands.add("Manage_Bank_Page_Label", () => {
  cy.get(manageBankPageLabel).should("have.text", manageBankPageLabelText);
});

//Link a Bank Account Page Label
const linkABankPageLabel = ".main_title__6Mbhv";
var linkABankPageLabelText = "Link a bank account";

Cypress.Commands.add("Link_A_Bank_Account_Page_Label", () => {
  cy.get(linkABankPageLabel).should("have.text", linkABankPageLabelText);
});

//Click "+" icon in withdraw page --> Link a bank account page
const addIconInWithdrawPage = ".withdraw_addBankIcon__045CA";

Cypress.Commands.add(
  "Click_Add_Icon_In_Withdraw_Page_To_Link_Bank_Account_Page",
  () => {
    cy.get(addIconInWithdrawPage).click();
  }
);

//Click "+" icon in My Bank Accounts --> Link a bank account page
const addIconInMyBankAccountPage = ".banks_addBankIcon__Kr_qy";

Cypress.Commands.add(
  "Click_Add_Icon_In_My_Bank_Account_Page_To_Link_Bank_Account_Page",
  () => {
    cy.get(addIconInMyBankAccountPage).click();
  }
);

//Click "See All" in withdraw page --> My Bank Account page
const witdrawPageSeeAll = ".withdraw_seeAllBanks__axAFG";
var witdrawPageSeeAlltext = "See All";

Cypress.Commands.add(
  "Click_See_All_Button_In_Withdraw_Page_To_My_Bank_Account_Page",
  () => {
    cy.get(witdrawPageSeeAll).should("have.text", witdrawPageSeeAlltext);
    cy.get(witdrawPageSeeAll).click();
  }
);

//Select Bank in bank list in Link A bank Account Page
const bankListContainer = ".inputs_selectTriggerButton__1Cuu_";
const bankListPopUp = ".inputs_options__LHQL7";
const closeBankListPopUp = ".inputs_icon__y16Hv";
const maybank =
  ".inputs_options__LHQL7 > .inputs_optionWrapper___eVdd:nth-child(15)";
const cimbBank =
  ".inputs_options__LHQL7 > .inputs_optionWrapper___eVdd:nth-child(9)";
const amBank =
  ".inputs_options__LHQL7 > .inputs_optionWrapper___eVdd:nth-child(3)";
var bankListText = "Select your bank";
var maybankText = "Maybank";
var cimbBankText = "CIMB Bank";
var amBankText = "AmBank";

Cypress.Commands.add("Click_Bank_Container", () => {
  cy.get(bankListContainer).should("have.text", bankListText);
  cy.get(bankListContainer).click();
});

Cypress.Commands.add("Click_Maybank_In_Bank_List", () => {
  cy.get(maybank).click();
  cy.get(bankListContainer).should("have.text", maybankText);
});

Cypress.Commands.add("Click_CIMB_Bank_In_Bank_List", () => {
  cy.get(cimbBank).click();
  cy.get(bankListContainer).should("have.text", cimbBankText);
});

Cypress.Commands.add("Click_AmBank_In_Bank_List", () => {
  cy.get(amBank).click();
  cy.get(bankListContainer).should("have.text", amBankText);
});

Cypress.Commands.add("Click_X_Button_Close_Bank_List_Pop_Up", () => {
  cy.get(closeBankListPopUp).click();
});

//Insert Account Number and validation Message
const accountNumberContainer = "#accountNo";

Cypress.Commands.add(
  "Insert_Account_Number_In_Account_Number_container",
  (accountNumber) => {
    cy.get(accountNumberContainer).click();
    cy.get(accountNumberContainer).type(accountNumber);
  }
);

Cypress.Commands.add("Account_Number_Validation_Message", () => {
  cy.get(accountNumberContainer)
    .invoke("prop", "validationMessage")
    .should("equal", "Please fill out this field.");
});

//Click Link bank Account button
const linkBankAccountButton =
  ".bank-inputs_actionContainer__0HlAS > .TT__standard-button";
var linkBankAccountButtonText = "Link bank account";

Cypress.Commands.add("Click_Link_Bank_Account_Button", () => {
  cy.get(linkBankAccountButton).should("have.text", linkBankAccountButtonText);
  cy.get(linkBankAccountButton).click();
});

//Error message below Account Number
const accountNumberErrorMessage = ".inputs_error__MFgZN";
var accountNumberErrorMessageText = "Please enter a valid account number";

Cypress.Commands.add("Account_Number_Error_message", () => {
  cy.get(accountNumberErrorMessage).should(
    "have.text",
    accountNumberErrorMessageText
  );
});

//Link a bank account page show message when reach max 5 banks
const reachLimitMessage = ".banks_addBankContent__N1Kql > .errorPanel";
var reachLimitMessageText = "You cannot have more than 5 bank accounts.";

Cypress.Commands.add("Link_A_bank_account_Page_Reach_Limit_Message", () => {
  cy.get(reachLimitMessage).should("have.text", reachLimitMessageText);
});

//Link a bank account error pop up when duplicate account number
const duplicatedErrorMessagePopUp = ".modal_message__hHpBD";
const closeduplicatedErrorMessagePopUp =
  ".modal_action__0o7AY > .TT__standard-button";
var duplicatedErrorMessagePopUpText =
  "Seems like you have the same bank account number, please use another bank account";
var closeduplicatedErrorMessagePopUpText = "Okay";

Cypress.Commands.add("Duplicate_Account_Number_Error_Message", () => {
  cy.get(duplicatedErrorMessagePopUp).should(
    "have.text",
    duplicatedErrorMessagePopUpText
  );
});

Cypress.Commands.add("Close_Duplicate_Account_Number_Error_Message", () => {
  cy.get(closeduplicatedErrorMessagePopUp).should(
    "have.text",
    closeduplicatedErrorMessagePopUpText
  );
  cy.get(closeduplicatedErrorMessagePopUp).click();
});

//Point second bank in My Bank Account page
const secondBankInBankAccount =
  ":nth-child(2) > .grid-option-button_option__TNZ8v";
const deleteIcon = ":nth-child(2) > .banks_deleteBank__jQvLW";

Cypress.Commands.add("Point_And_Click_Delete_Icon", () => {
  cy.get(secondBankInBankAccount).trigger("mouseover");
  cy.get(deleteIcon).invoke('show').click()
});

//Button in delete bank Pop Up
const deleteBankNoButton = '.buttons_button__Pv4L3:nth-child(2)'
const deleteBankYesButton = '.buttons_button__Pv4L3:nth-child(1)'
var deleteBankNoButtonText = 'No'
var deleteBankYesButtonText = 'Delete bank'

Cypress.Commands.add('Click_No_Button_In_Delete_bank_Pop_Up', ()=>{
  cy.get(deleteBankNoButton).should('have.text', deleteBankNoButtonText)
  cy.get(deleteBankNoButton).click()
})

Cypress.Commands.add('Click_Delete_bank_Button_In_Delete_bank_Pop_Up', ()=>{
  cy.get(deleteBankYesButton).should('have.text', deleteBankYesButtonText)
  cy.get(deleteBankYesButton).click()
})

//Click Homepage & Account Page Deposit Icon --> Deposit Page
const goToDepositIcon = ".actions-bar_action__DNPjc:nth-child(1)";

Cypress.Commands.add("Click_Homepage_Deposit_Icon", () => {
  cy.get(goToDepositIcon).click();
});

Cypress.Commands.add("Click_Account_Page_Deposit_Icon", () => {
  cy.get(goToDepositIcon).click();
});

//Deposit Page Label
const depositPageLabel = ".deposit_sectionTitle__3_7Pw";
var depositPageLabelText = "Deposit Options";