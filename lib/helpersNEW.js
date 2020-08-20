// See chapters 26 and 27 udemy

module.exports = {
    // chapters 25 and 26 - Custom Commands    
    click: async function (page, selector) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error(`Could not click on the selector: ${selector}`);
        }
    },
    getText: async function (page, selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => element.innerHTML);
            //return await page.$eval(selector, element => element.textContent);
        } catch (error) {
            throw new Error(`Cannot get text from select: ${selector}`);
        }
    },
    getCount: async function (page, selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$$eval(selector, element => element.length);
        } catch (error) {
            throw new Error(`Cannot get count of selector: ${selector}`);
        }
    },
    typeText: async function(page, selector, text) {
        try {
            await page.waitForSelector(selector);
            await page.type(selector, text);
        } catch (error) {
            throw new Error(`Could not type into the selector: ${selector}`);
        }
    },
    waitForText: async function(page, selector, text) {
        try {
            await page.waitForSelector(selector);
            await page.waitForFunction((selector, text) => {
                document.querySelector(selector).innerText.include(text),
                {},
                selector,
                text
            })
        } catch (error) {
            throw new Error(`Text: ${text} not found for selector: ${selector}`);
        }
    },
    // e.g. login button disappears after logging in
    shouldNotExist: async function(page, selector) {
        try {
            // await page.waitFor(() => !document.querySelector(selector));
            await page.waitForSelector(selector, { hidden: true });
        } catch (error) {
            throw new Error(`Selector: ${selector} is visible, but should not be`);
        }
    }
}
