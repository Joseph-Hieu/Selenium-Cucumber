package objects;

import org.openqa.selenium.By;

public class LoginPage {
    public static String loginUrl = "https://accounts.google.com";
    public static String email = "testemail@gmail.com";
    public static String password = "1234";
    public By emailTextbox = By.id("identifierId");
    public By nextButton = By.xpath("//span[@class='VfPpkd-vQzf8d']");
    public By passwordTextbox = By.xpath("//input[@class='whsOnd zHQkBf']");

}
