package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/java/features"},
        format = {"json:src/report/cucumber.json", "html:src/report/cucumberhtmlreport"},
        glue = "steps"
)

public class TestRunner {
}
