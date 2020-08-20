const { Given, When, Then } = require("cucumber");
const LoginPage = require('../../pages/loginPage');
const AccountsPage = require("../../pages/accountsPage");
const HomePage = require("../../pages/homePage");

// get variables required for these steps only from config file
//const { username, password } = require("../../../config.js")
const { username, password } = require("../../config.js")

Given("I open the login page", async function () {
    //since its invoked from hook
});

When("I complete the login form", async function () {
   const loginPage = new LoginPage(this.page);
   await loginPage.login(this.page, username, password);
});

When("I click the submit button", async function() {
    const loginPage = new LoginPage(this.page);
    await loginPage.clickSignIn(this.page);
});

Then("I expect to see the application content", async function() {
    const accountsPage = new AccountsPage(this.page);
    await accountsPage.isAccountsPage(this.page);
});

When("I click the Signin button", async function() {
    const homePage = new HomePage(this.page);
    await homePage.ClickSignIn(this.page);
});

Then("the login page is displayed", async function() {
    const loginPage = new LoginPage(this.page);
    await loginPage.IsLoginPageDisplayed(this.page);
});

When("I enter the login details", async function(datatable) {
    const loginPage = new LoginPage(this.page);
    await loginPage.EnterLoginDetails(this.page, datatable);
});
       
    
