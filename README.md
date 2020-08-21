# PPTR-POM-VRT-CHAI
Puppeteer with Cucumber, Page Object Model, Visual Regression and Chai Expect Assertions

Import the node libraries
>__npm update__

To run the tests with the 3 tags
>__./node_modules/.bin/cucumber-js --tags='@accountsummarytabs or @feedback or @accountsummary'  features -f json:report/cucumber_report.json__

To run the tests with the 1 tags>
>__./node_modules/.bin/cucumber-js --tags='@feedback'  features -f json:report/cucumber_report.json__

To generate the cucumber report
>__node cucumber-reporter.js__

Install node.js and dependencies as required
>__https://nodejs.org/en/__

Extensions
- __Cucuumber (Gherkin) Full Support__
- Excel Viewer
- Jest
- npm intellisense
- __prettier__
- __vscode-icons__
