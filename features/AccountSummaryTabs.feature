Feature: Transfer Funds

    As a user I want to see all my account options

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

    @accountsummarytabs
    Scenario Outline: Show all tabs
        When I click the "<Tab>" Tab
        Then the "<Tab>" Details are displayed
        When I select the logout option
        Given the homepage is displayed
        Examples:
            | Tab              |
            | Account Activity |
            | Transfer Funds   |
            | Pay Bills         |
            | My Money Map      |
            | Online Statements |

