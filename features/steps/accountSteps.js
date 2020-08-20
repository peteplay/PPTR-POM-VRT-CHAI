const { Given, When, Then } = require("cucumber");
const AccountsPage = require("../../pages/accountsPage");

//When("I click the Account Activity Tab", async function () {
//    await accounts_page.navigateToAccountActivityPage(this.page);
//});

Then("I expect to see the Show Transactions Details", async function () {
    const accountsPage = new AccountsPage(this.page);
    await accountsPage.ShowTransactionsDisplayed(this.page);
});

When('I click the {string} Tab', async function(tab) {
    const accountsPage = new AccountsPage(this.page);
    await accountsPage.navigateToTab(tab);
});

Then("the {string} Details are displayed", async function(tab) {
    const accountsPage = new AccountsPage(this.page);
    await accountsPage.isTabDisplayed(tab);
});

Then("The Account Activity Details are displayed", async function () {
    const accountsPage = new AccountsPage(this.page);
    await accountsPage.isTabDisplayed(this.page);
});



