$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1search.feature");
formatter.feature({
  "line": 1,
  "name": "Google Login Workflow",
  "description": "",
  "id": "google-login-workflow",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3549905600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Try to test search login workflow",
  "description": "",
  "id": "google-login-workflow;try-to-test-search-login-workflow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am in Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I input a text to search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The result will show the result page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iAmInGoogleHomePage()"
});
formatter.result({
  "duration": 359617100,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iInputATextToSearchTextbox()"
});
formatter.result({
  "duration": 1276063300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.theResultWillShowTheResultPage()"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.after({
  "duration": 1269091500,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3269437100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Try to test login Google",
  "description": "",
  "id": "login;try-to-test-login-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am in Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The result will show the form login",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iAmInGoogleHomePage()"
});
formatter.result({
  "duration": 310111300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iClickOnTheLoginButton()"
});
formatter.result({
  "duration": 1378610700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.theResultWillShowTheFormLogin()"
});
formatter.result({
  "duration": 26900,
  "status": "passed"
});
formatter.after({
  "duration": 954939400,
  "status": "passed"
});
formatter.before({
  "duration": 3254869600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Try to test login Google",
  "description": "",
  "id": "login;try-to-test-login-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I input email",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I input password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The result will show the logged page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iAmInLoginPage()"
});
formatter.result({
  "duration": 1742925700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iInputEmail()"
});
formatter.result({
  "duration": 215853600,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iInputPassword()"
});
formatter.result({
  "duration": 79403000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.theResultWillShowTheLoggedPage()"
});
formatter.result({
  "duration": 91863200,
  "status": "passed"
});
formatter.after({
  "duration": 931498000,
  "status": "passed"
});
formatter.before({
  "duration": 3353543400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Try to test login FAIL",
  "description": "",
  "id": "login;try-to-test-login-fail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I input email",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I input password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The result will show email FAIL",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "The result will show pass FAIL",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.iAmInLoginPage()"
});
formatter.result({
  "duration": 1629813900,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iInputEmail()"
});
formatter.result({
  "duration": 172201300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iInputPassword()"
});
formatter.result({
  "duration": 100932200,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.theResultWillShowEmailFAIL()"
});
formatter.result({
  "duration": 325600,
  "error_message": "java.lang.Exception: Fail this test\r\n\tat steps.SearchSteps.theResultWillShowEmailFAIL(SearchSteps.java:78)\r\n\tat ✽.Then The result will show email FAIL(login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchSteps.theResultWillShowPasswordFAIL()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4707196200,
  "status": "passed"
});
});