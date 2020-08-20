const { Given, When, Then } = require("cucumber");
const AccountsPage = require('../../pages/accountsPage');
const HomePage = require("../../pages/homePage");
const FeedbackPage = require("../../pages/feedbackPage");


Then("I see the accounts page", async function () {
    const accountsPage = new AccountsPage(this.page);
    await accountsPage.isAccountsPage(this.page);
});

Given("the homepage is displayed", async function () {
    const homePage = new HomePage(this.page);
    await homePage.isHomepageDisplayed(this.page);
});

When("I click the feedback tab", async function () {
    const homePage = new HomePage(this.page);
    await homePage.clickToNavigateTab(this.page);
});

Then("the feedback page is displayed", async function() {
    const feedbackPage = new FeedbackPage(this.page);
    await feedbackPage.isFeedbackPageDisplayed(this.page);
});

When("I select the logout option", async function () {
    const accountsPage = new AccountsPage(this.page);
    await accountsPage.logout(this.page);
});
