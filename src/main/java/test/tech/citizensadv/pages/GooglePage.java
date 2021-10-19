package test.tech.citizensadv.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import test.tech.citizensadv.utility.Utility;

public class GooglePage extends Utility {

    private static final Logger log = LogManager.getLogger(GooglePage.class.getName());

    //Page Object Model
    By googlePopUp = By.xpath("//div[contains(text(),'I agree')]");
    By googleSearchBox = By.name("q");
    By googleSearchButton = By.xpath("//div[@class='FPdoLc lJ9FBc']//input[@class='gNO89b']");
    By CitizensAdviceLink = By.xpath("//body/div[@id='main']/div[@id='cnt']/div[@id='rcnt']/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/div[1]/cite[1]");


    public void setGooglePopUp() {
        clickOnElement(googlePopUp);
        log.info("Clicking on the Google PopUp :" + googlePopUp.toString() + "<br>");
    }

    public void setGoogleSearchBox() {
        sendTextToElement(googleSearchBox,"Citizens Advice");
        log.info("Sending Text to Google Search Box :" + googleSearchBox.toString() + "<br>");
    }


    public void setGoogleSearchButton() {
        clickOnElement(googleSearchButton);
        log.info("Clicking on the Google Search Button :" + googleSearchButton.toString() + "<br>");
    }

    public void setCitizensAdviceLink() {
        clickOnElement(CitizensAdviceLink);
        log.info("Clicking on Citizens Advice Link :" + CitizensAdviceLink.toString() + "<br>");
    }
}
