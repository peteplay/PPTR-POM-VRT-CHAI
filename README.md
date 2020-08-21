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
- __Cucumber (Gherkin) Full Support__
- Excel Viewer
- Jest
- npm intellisense
- __prettier__
- __vscode-icons__


Add the following to the Cucumber settings.json

```
{
    "window.zoomLevel": 0,
    "workbench.iconTheme": "vscode-icons",

"cucumberautocomplete.steps": [
 //   "./features/*.feature",
 //   "./step_definitions/steps.js"
 
 // Cucumber project
 "features/steps/*.js",
 "node_modules/qa_lib/src/step_definitions/*.js"

 //"./features/*.feature",
 //"./features/steps/*steps.js"

],
"cucumberautocomplete.syncfeatures": "features/*features",
"cucumberautocomplete.strictGherkinCompletion": true,


    "cucumberautocomplete.customParameters": [
    
    ],
    "cucumberautocomplete.pages": {
    
    },
    "javascript.updateImportsOnFileMove.enabled": "always",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```
