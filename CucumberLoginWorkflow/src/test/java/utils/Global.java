package utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Global {
    public static String baseUrl = "https://www.google.com";
    public static WebDriver driver;
    public static int globalTimeout = 20;

    public Global() {
        System.setProperty("webdriver.chrome.driver", "src/driver/chromedriver.exe");
        driver = new ChromeDriver();
    }
}
