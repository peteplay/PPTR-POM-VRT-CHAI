const { Before, After, setDefaultTimeout } = require("cucumber");

//var {setDefaultTimeout} = require("cucumber");
//setDefaultTimeout(60 * 1000);

Before(async function () {
    await this.openBrowser(); // this calls the openBrowser in world.js
    setDefaultTimeout(30 * 1000); // sets the cucumber timeout
});

After(async function () {
    await this.closeBrowser();
    // cleanup BD
});

After(async function(scenario) {
    if (scenario.result.status === 'failed') {
        const screenShot = await this.page.screenshot();
        this.attach(screenShot,'image/png');
    }
});





