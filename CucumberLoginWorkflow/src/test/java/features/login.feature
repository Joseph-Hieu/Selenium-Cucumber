Feature: Login

  Scenario: Try to test login Google
    Given I am in Google Home page
    When I click on the login button
    Then The result will show the form login

  Scenario: Try to test login Google
    Given I am in login page
    When I input email
    And I input password
    Then The result will show the logged page

  Scenario: Try to test login FAIL
    Given I am in login page
    When I input email
    And I input password
    Then The result will show email FAIL
    And The result will show pass FAIL