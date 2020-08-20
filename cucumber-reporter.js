var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'report/cucumber_report.json',
    output: 'report/cucumber_report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    brandTitle: 'Smoke tests',
    columnLayout: 2,
    storeScreenshots: true,
    screenshotsDirectory: 'report/screenshots/',
    scenarioTimestamp: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }

};

reporter.generate(options);

