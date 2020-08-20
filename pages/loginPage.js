class LoginPage {

    constructor(page) {
        this.page = page;
    }

    // declare all elements once here then reuse as required
    //let btn_signin = ".btn-primary";
    //let form_login = "#login_form";
    //let input_userLogin = "#user_login";
    //let input_password = "#user_password";

    async login(userName, password) {
        await this.page.type("#user_login", "username");
        await this.page.waitForSelector("#user_password");
        await this.page.type("#user_password", "password");
        //await page.screenshot({ path: "cucumber/screenshots/login.png" })
        //await page.pdf({ path: "cucumber/screenshots/login.pdf", format: "A4" });
    }

    async clickSignIn() {
        await this.page.waitForSelector(".btn-primary");
        await this.page.click(".btn-primary");
    }

    async IsLoginPageDisplayed() {
        await this.page.waitForSelector("#login_form"); // use element or variable
        await this.page.waitForSelector("#user_login");
    }

    async EnterLoginDetails(datatable) {
        let username, password;
        datatable.rows().forEach(async (row) => {
            username = row[0];
            password = row[1];
        });

        await this.page.type("#user_login", username);
        await this.page.waitForSelector("#user_password");
        await this.page.type("#user_password", password);
    }


}
module.exports = LoginPage;