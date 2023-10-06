package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.LoginPage;
import objects.SearchPage;
import utils.Common;
import utils.Global;

public class SearchSteps {
    Global appGlobal = new Global();
    Common common = new Common();
    SearchPage searchPage = new SearchPage();
    LoginPage loginPage = new LoginPage();

    @Before
    public void beforeEachScenario() {
        System.out.println("This will be run before each scenario");
        common.goToHomePage();
    }

    @After
    public void afterEachScenario() {
        Global.driver.close();
        Global.driver.quit();
    }

    @Given("^I am in Google Home page$")
    public void iAmInGoogleHomePage() {
        common.goToHomePage();
    }

    @When("^I input a text to search textbox$")
    public void iInputATextToSearchTextbox() {
        common.inputText(searchPage.inputTextBox, searchPage.searchTxt, Global.globalTimeout);
    }

    @Then("^The result will show the result page$")
    public void theResultWillShowTheResultPage() { }

    /*@Then("^The result will show the result page FAIL$")
    public void theResultWillShowTheResultPageFail() throws Exception {
        throw new Exception("Fail this test");
    }*/


    //Click Login Button In Google Home Page
    @When("^I click on the login button$")
    public void iClickOnTheLoginButton() {
        common.clickElement(searchPage.loginButton, Global.globalTimeout);
    }

    @Then("^The result will show the form login$")
    public void theResultWillShowTheFormLogin() throws Exception { }


    @Given("^I am in login page$")
    public void iAmInLoginPage() {
        appGlobal.driver.get(loginPage.loginUrl);
        //Global.driver.getCurrentUrl();
    }
    //Input Email
    @When("^I input email$")
    public void iInputEmail() {
        common.inputText(loginPage.emailTextbox, loginPage.email, Global.globalTimeout);
    }

    @Then("^The result will show form password$")
    public void theResultWillShowFormPassword() {
        common.clickElement(loginPage.nextButton, Global.globalTimeout);
    }

    @Then("^The result will show email FAIL$")
    public void theResultWillShowEmailFAIL() throws Exception {
        throw new Exception("Fail this test");
    }

    //Input Password
    @When("^I input password$")
    public void iInputPassword() {
        common.inputText(loginPage.passwordTextbox, loginPage.password, Global.globalTimeout);
    }

    @Then("^The result will show the logged page$")
    public void theResultWillShowTheLoggedPage() {
        common.clickElement(loginPage.nextButton, Global.globalTimeout);
    }

    @Then("^The result will show pass FAIL$")
    public void theResultWillShowPasswordFAIL() throws Exception {
        throw new Exception("Fail this test");
    }

}
