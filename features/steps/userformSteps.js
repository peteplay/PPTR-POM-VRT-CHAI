const { Given } = require("cucumber");
const HomePage = require('../../pages/accountsPage').default;

Given("I enter userform details", async function (datatable) {
    let initial, name, middleName;

    //little more verbose for understanding purpose    
    datatable.rows().forEach(async (row) => {
        initial = row[0];
        name = row[1];
        middleName = row[2];
    });

    await homePage.userFormEntry(this.page, initial, name, middleName);
});