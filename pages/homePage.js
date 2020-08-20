class HomePage{

    constructor(page) {
        this.page = page
    }

    

    //let signinButton = "#signin_button";
    //let searchTermField = "#searchTerm";
    //let feedbackTab = "#feedback";
    
    async isHomepageDisplayed() {
        //await page.waitForSelector("#signin_button");
        //await page.waitForSelector("#searchTerm");
        
        // start tracing
        //await page.tracing.start({ path: "./cucumber/tracing/trace.json" });
        
        await this.page.waitForSelector("#signin_button");
        await this.page.waitForSelector("#searchTerm");
    }
    
    async clickToNavigateTab() {
        //await page.waitForSelector('#feedback');
        //await page.click('#feedback');
        await this.page.waitForSelector("#feedback");
        await this.page.click("#feedback");
    }
    
    async ClickSignIn() {
        await this.page.click("#signin_button");
    }

}



module.exports = HomePage;
