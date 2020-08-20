const { Given, When, Then } = require("cucumber");
const FeedbackPage = require('../../pages/feedbackPage');

Then("a snapshot comparison is made", async function () {
    const feedbackPage = new FeedbackPage(this.page);
    await feedbackPage.takeSnapshot();
});

