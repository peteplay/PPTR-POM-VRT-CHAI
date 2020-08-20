const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const { getText, click, getCount, waitForText, shouldNotExist } = require("../lib/helpers.js");

class AccountsPage{

    constructor(page) {
        this.page = page;
    }

    //const { assert } = require("chai");
    //const expect = require("chai").expect;
    //const page = require("puppeteer");
    //const puppeteer = require('puppeteer');


    async userFormEntry(name, initial, middleName) {
        await this.page.type("input[id=Initials]", initial);
        await this.page.type("input[id=FirstName]", name);
        await this.page.type("input[id=MiddleName]", middleName);
    }

    async isAccountsPage() {
        // using the helper function
        await shouldNotExist(this.page, '#signinbutton'); // the signinbutton should no longer be displayed
        //await this.page.waitForSelector('#signinbutton', { hidden: true });
        await this.page.waitForSelector("#account_summary_tab"); 
    }

    async navigateToAccountActivityPage() {
        await this.page.waitForSelector("#account_activity_tab");
        await this.page.click("#account_activity_tab");
    }

    async logout() {
        //await this.page.waitFor(5000);
        const elements = await this.page.$x('//*[@id="settingsBox"]/ul/li[3]/a');
        await elements[0].click();
        await this.page.waitForSelector("#logout_link");
        await this.page.click("#logout_link");
    }

    async ShowTransactionsDisplayed() {
        await this.page.waitForSelector("h2.board-header");
        const text = await this.page.$eval(
            "h2.board-header",
            (element) => element.textContent
        );
        expect(text).to.equal("Show Transactions");
        console.log(text);
    }

    async navigateToTab(tab) {
        //console.log("Tab = " + tab);
        switch (tab) {
            case "Account Activity":
                await this.page.waitForSelector("#account_activity_tab");
                await this.page.click("#account_activity_tab");
                break;
            case "Transfer Funds":
                await this.page.waitForSelector("#transfer_funds_tab");
                await this.page.click("#transfer_funds_tab");
                break;
            case "Pay Bills":
                await this.page.waitForSelector("#pay_bills_tab");
                await this.page.click("#pay_bills_tab");
                break;
            case "My Money Map":
                await this.page.waitForSelector("#money_map_tab");
                await this.page.click("#money_map_tab");
                break;
            case "Online Statements":
                await this.page.waitForSelector("#online_statements_tab");
                await this.page.click("#online_statements_tab");
                break;
        }
    }

    async isTabDisplayed(tab) {
        //console.log("tab = " + tab);
        switch (tab) {
            case "Account Activity":
                await this.page.waitForSelector("h2.board-header");
                
                // PDF in headless ONLY
                await this.page.pdf({ path: "pdf/Account_Activity.pdf", format: "A4" });

                const urlAA = await this.page.url();
                // Use the helper -- Working
                const textAA = await getText(this.page, 'h2.board-header');
                //console.log(textAA);

                // this works
                //const textAA = await this.page.$eval(
                //    "h2.board-header",
                //    (element) => element.textContent
                //);

                expect(textAA).to.equal("Show Transactions");
                //console.log("hello");
                expect(urlAA).to.include("account-activity.html");
                break;
            case "Transfer Funds":
                const urlTF = await this.page.url();
                expect(urlTF).to.include("transfer-funds.html");
                break;
            case "Pay Bills":
                const urlPB = await this.page.url();
                expect(urlPB).to.include("pay-bills.html");
                break;
            case "My Money Map":
                const urlMMM = await this.page.url();
                expect(urlMMM).to.include("money-map.html");
                break;
            case "Online Statements":
                const urlOLS = await this.page.url();
                expect(urlOLS).to.include("online-statements.html");
                break;
        }
    }
}

module.exports = AccountsPage;
