Feature: Feedback page
    Check that the feedback option is available

    @feedback
    Scenario: Check the feedback page
        Given the homepage is displayed
        When I click the feedback tab
        Then the feedback page is displayed
        And a snapshot comparison is made
    