# PPTR-POM-VRT-CHAI
Puppeteer with Page Object Model, Visual Regression and Chai Expect Assertions

Import the node libraries
>__npm update__

To run the tests with the 3 tags
>__./node_modules/.bin/cucumber-js --tags='@accountsummarytabs or @feedback or @accountsummary'  features -f json:report/cucumber_report.json__

To run the tests with the 1 tags>
__./node_modules/.bin/cucumber-js --tags='@feedback'  features -f json:report/cucumber_report.json__
