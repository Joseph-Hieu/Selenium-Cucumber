Feature: Google Login Workflow

  Scenario: Try to test search login workflow
    Given I am in Google Home page
    When I input a text to search textbox
    Then The result will show the result page
