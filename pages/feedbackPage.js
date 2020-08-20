const puppeteer = require("puppeteer");
const ScreenshotTester = require('puppeteer-screenshot-tester');
const expect = require('chai').expect;

class FeedbackPage {
	constructor(page) {
		this.page = page
	}

	async isFeedbackPageDisplayed() {
		await this.page.waitForSelector("#name")
		await this.page.waitForSelector("#email")
		await this.page.waitForSelector("#subject")
		await this.page.waitForSelector("#comment")

		// print a pdf file - headless needs to be set to true
		//await page.pdf({ path: "./cucumber/pdf/feedback.pdf", format: "A4" });

		// stop tracing, starts on home_page.js
		//await page.tracing.stop();

		// create a screenshot -- needs to be run in headless mode
		//await page.screenshot({ path: "./cucumber/screenshots/feedback.png" });
	};

	async takeSnapshot() {
		// uncomment the next line see differences
		//await this.page.emulate(puppeteer.devices["iPhone X"])
		const tester = await ScreenshotTester();
		const result = await tester(this.page, 'FeedbackPage', {
			fullPage: true,
			path: 'screenshots/FeedbackPageBaseline',
	    })
		expect(result).to.equal(true)
	};

/*
	async takeSnapshot() {
        const image = await this.page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: "pixel",
            failureThreshold: 500
        })
    }
*/

	//async MobileSnapshot() {
	//	await this.page.emulate(puppeteer.devices["iPhone X"])
	//	const image = await this.page.screenshot()
	//	expect(image).toMatchImageSnapshot({
	//		failureThresholdType: "percent",
	//		failureThreshold: 0.01,
	//	})
	//}
}

module.exports = FeedbackPage
