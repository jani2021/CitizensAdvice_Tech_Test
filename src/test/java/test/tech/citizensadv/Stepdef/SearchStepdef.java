package test.tech.citizensadv.Stepdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import test.tech.citizensadv.pages.GooglePage;
import test.tech.citizensadv.pages.HomePage;
import test.tech.citizensadv.pages.ImmigrationPage;
import test.tech.citizensadv.pages.StayingInUKOnVisaWithoutPartnerPage;

public class SearchStepdef {

    @Given("^I am on Google page$")
    public void iAmOnGooglePage() {
        new GooglePage().clickOnAgreeBtn();
    }

    @When("^I input text \"([^\"]*)\" in search box$")
    public void iInputTextInSearchBox(String text)  {
        new GooglePage().setGoogleSearchBox(text);
        new GooglePage().clickOnGoogleSearchBtn();
    }

    @Then("^I should be navigated to Citizens Advice Website$")
    public void iShouldBeNavigatedToCitizensAdviceWebsite() {
        new GooglePage().setCitizensAdviceWebsite();
    }

    @Given("^I am on Citizens Advice home page$")
    public void iAmOnCitizensAdviceHomePage() {
       Assert.assertEquals("Welcome to Citizens Advice", new HomePage().CitizensAdviceHomePage());
    }

    @And("^I am able to see the list of items$")
    public void iAmAbleToSeeTheListOfItems(String items) {
        new HomePage().setListOfItems(items);
    }

    @Then("^Verify list of items \"([^\"]*)\" on the main navigation header of the home page\\.$")
    public void verifyListOfItemsOnTheMainNavigationHeaderOfTheHomePage(String items)  {
        new HomePage().setListOfItems(items);
    }

    @And("^I click England as option$")
    public void iClickEnglandAsOption() throws InterruptedException {
        Thread.sleep(3000);
        new HomePage().clickEnglandFromPopUp();
    }
    @When("^I click on Immigration tab$")
    public void iClickOnImmigrationTab() {
        new HomePage().setImmigrationTab();
    }

    @And("^Verify I am navigated to Immigration page$")
    public void verifyIAmNavigatedToImmigrationPage() {
        Assert.assertEquals("Immigration", new ImmigrationPage().immigrationPage());
    }

    @And("^Verify search results contain a link \"([^\"]*)\"$")
    public void verifySearchResultsContainALink(String arg0)  {
        Assert.assertEquals("Staying in the UK on a visa wihtout your partner", new ImmigrationPage().StayingInTheUKLink());
    }

    @And("^I click on \"([^\"]*)\" link$")
    public void iClickOnLink(String arg0)  {
        new ImmigrationPage().iClickOnStayingInTheUKLink();
    }

    @And("^I am navigated to Staying in the UK on a visa without your partner page$")
    public void iAmNavigatedToStayingInTheUKOnAVisaWithoutYourPartnerPage() {
        Assert.assertEquals("Staying in the UK on a visa without your partner", new StayingInUKOnVisaWithoutPartnerPage().verifyStayingInUKOnVisaPage());
    }

    @Then("^Verify I can see immigration related help under main immigration section$")
    public void verifyICanSeeImmigrationRelatedHelpUnderMainImmigrationSection() {
        Assert.assertEquals("search for an immigration adviser", new StayingInUKOnVisaWithoutPartnerPage().verifyImmigrationRelatedHelp());
    }

}
