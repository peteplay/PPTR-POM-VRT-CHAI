const puppeteer = require("puppeteer");
//const expect = require("chai").expect;
//const assert = require("chai").assert;
//const { setWorldConstructor } = require("cucumber"); // this sets the default cucumber timeout of 5000ms
const { setWorldConstructor, setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

const { baseurl } = require("../../../config.js")  // variable added from config files

console.log("The baseURL is: " + baseurl);
//const url = "http://zero.webappsecurity.com/";
const url = baseurl;
//const iPhone = puppeteer.devices["iPhone X"];

// updated for screenshot
class World {
    constructor({ attach }) {
        this.World = "",
        this.attach = attach,
        this.parameters = ""
    }

    async openBrowser() {
        //Browser
        this.browser = await puppeteer.launch({
            headless: true,
            slowMo: 0, // slow down, e.g. skowMo:20 // slow down by 20ms // set to 0 for headless
            devtools: false,
        });

        //Page incognito
        //this.context = await this.browser.createIncognitoBrowserContext(); // doesn't do anything currently
        //this.page = await this.context.newPage(); // uncomment this line for incognito
        
        // Page normal
        this.page = await this.browser.newPage(); // uncomment if you do NOT want incognito
        
        // Emulation
        //await this.page.emulate(iPhone); // set emulator is required, see above for setting
        await this.page.goto(url);

        //await this.page.goto(url, { waitUntil: "networkidle0" });  // url used for all scenarios, // networkidle2 = no more than 2 active requests
        //await this.page.waitForNavigation({ 'waitUntil': 'domcontentloaded'});

        // use the following if the home page has many images - this will wait for all the images to be loaded
        //await this.page.waitForResponse(response => {
        //    return response.request().resourceType() === "image"
        //});

        // Get the "viewport" of the page, as reported by the page.
        /*
        const dimensions = await this.page.evaluate(() => {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                deviceScaleFactor: window.devicePixelRatio,
            };
        });
        console.log("Dimensions:", dimensions);
        */

    }

    async closeBrowser() {
        await this.browser.close();
    }
}

setWorldConstructor(World);
