package test.tech.citizensadv;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import test.tech.citizensadv.basepage.BasePage;
import test.tech.citizensadv.propertyreader.PropertyReader;

/**
 * Created by Jay Vaghani
 */
public class Rough extends BasePage {

    public static WebDriver driver;
    static String projectPath = System.getProperty("user.dir");
    private static final Logger log = LogManager.getLogger(BasePage.class.getName());


    public static void main(String[] args) throws InterruptedException {
        String baseUrl = PropertyReader.getInstance().getProperty("baseUrl");
        System.setProperty("webdriver.chrome.driver", projectPath + "/drivers/chromedriver.exe");
        log.info("Launching Chrome Browser ");
        driver = new ChromeDriver();
        driver.get(baseUrl);
        driver.findElement(By.xpath("//*[@id=\"CXQnmb\"]//div//button[@id='L2AGLb']")).click();
        driver.findElement(By.name("q")).sendKeys("Citizen Advise");
        driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]")).click();
        driver.findElement(By.xpath("//*[@id=\"rso\"]/div[1]/div/div/div/div/div/div/div[1]/a/div/cite")).click();
        driver.findElement(By.xpath("//a[@class='home-extent-popup__link'][normalize-space()='England']")).click();


    }
}








