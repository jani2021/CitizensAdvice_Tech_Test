package test.tech.citizensadv.pages;

import org.openqa.selenium.By;
import test.tech.citizensadv.utility.Utility;

public class GooglePage extends Utility {

    //Page Object Model
    By acceptTerms = By.xpath("//*[@id=\"CXQnmb\"]//div//button[@id='L2AGLb']");
    By googleSearchBox = By.name("q");
    By googleSearchBtn = By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]");
    By citizensAdviceWebsite = By.xpath("//body/div[@id='main']/div[@id='cnt']/div[@id='rcnt']/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/div[1]/cite[1]");


    public void clickOnAgreeBtn(){
        clickOnElement(acceptTerms);
    }

    public void clickOnGoogleSearchBtn(){
        clickOnElement(googleSearchBtn);
    }
    public void setGoogleSearchBox(String text) {
        sendTextToElement(googleSearchBox,text);
    }
    public void setCitizensAdviceWebsite() {
        mouseHoverToElementAndClick(citizensAdviceWebsite);
    }
}
