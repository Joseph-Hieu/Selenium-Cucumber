package objects;

import org.openqa.selenium.By;
import utils.Common;

public class SearchPage {

    public String searchTxt = "Google login";
    public By inputTextBox = By.name("q");
    public By loginButton = By.xpath("//a[contains(@class,'gb_3 gb_4')]");


}
