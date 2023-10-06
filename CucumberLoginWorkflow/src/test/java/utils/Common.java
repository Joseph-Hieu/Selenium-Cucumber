package utils;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Common {

    public static void goToHomePage() {
        Global.driver.get(Global.baseUrl);
        Global.driver.manage().window().maximize();
        //Assert.assertEquals("Google", Global.driver.getTitle());
    }

    public void clickElement (By element, int timeout) {
        WebDriverWait wait = new WebDriverWait(Global.driver, timeout);
        wait.until(ExpectedConditions.elementToBeClickable(element));

        Global.driver.findElement(element).click();
    }

    public void inputText (By element, String text, int timeout) {
        WebElement webElement = Global.driver.findElement(element);
        webElement.clear();
        webElement.sendKeys(text);

        WebDriverWait wait = new WebDriverWait(Global.driver, timeout);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//ul")));

        webElement.submit();
    }
}
