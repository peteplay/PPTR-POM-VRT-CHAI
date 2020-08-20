Feature: Transfer Funds

    As a user I want to see my transactions

    Background: Login
        Given the homepage is displayed
        When I click the Signin button
        Then the login page is displayed
        When I complete the login form
        #When I enter the login details
        #    | username | password |
        #    | username | password |
        And I click the submit button
        Then I expect to see the application content

    @accountsummary
    Scenario Outline: Show Transactions
        When I click the "<Tab>" Tab
        Then I expect to see the Show Transactions Details
        Examples:
            | Tab              |
            | Account Activity |

