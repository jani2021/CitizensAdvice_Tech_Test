$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "As a User I can Search google for Citizens Advice and verifying the search functionality on Citizens Advice Website",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "##  // Test: 1"
    },
    {
      "line": 5,
      "value": "#  Scenario: As a User I should be able to search for Citizens Advice on Google"
    },
    {
      "line": 6,
      "value": "#    Given I am on Google page"
    },
    {
      "line": 7,
      "value": "#    When  I input text \"Citizens Advice\" in search box"
    },
    {
      "line": 8,
      "value": "#    Then  I should be navigated to Citizens Advice Website"
    },
    {
      "line": 11,
      "value": "#  // Test: 2"
    }
  ],
  "line": 12,
  "name": "I can see and verify the list of items on the main navigation header of the home page",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I input text \"Citizens Advice\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be navigated to Citizens Advice Website",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click England as option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am able to see the list of items",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify list of items \"\u003citems\u003e\" on the main navigation header of the home page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;",
  "rows": [
    {
      "cells": [
        "items"
      ],
      "line": 20,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;1"
    },
    {
      "cells": [
        "Benefits"
      ],
      "line": 21,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;2"
    },
    {
      "cells": [
        "Work"
      ],
      "line": 22,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;3"
    },
    {
      "cells": [
        "Debt and money"
      ],
      "line": 23,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;4"
    },
    {
      "cells": [
        "Consumer"
      ],
      "line": 24,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;5"
    },
    {
      "cells": [
        "Housing"
      ],
      "line": 25,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;6"
    },
    {
      "cells": [
        "Family"
      ],
      "line": 26,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;7"
    },
    {
      "cells": [
        "Law and courts"
      ],
      "line": 27,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;8"
    },
    {
      "cells": [
        "Immigration"
      ],
      "line": 28,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;9"
    },
    {
      "cells": [
        "Health"
      ],
      "line": 29,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;10"
    },
    {
      "cells": [
        "More from us"
      ],
      "line": 30,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3350032400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I can see and verify the list of items on the main navigation header of the home page",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I input text \"Citizens Advice\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be navigated to Citizens Advice Website",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click England as option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am able to see the list of items",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify list of items \"Benefits\" on the main navigation header of the home page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdef.iAmOnGooglePage()"
});
formatter.result({
  "duration": 140872800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Citizens Advice",
      "offset": 14
    }
  ],
  "location": "SearchStepdef.iInputTextInSearchBox(String)"
});
formatter.result({
  "duration": 1919942200,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iShouldBeNavigatedToCitizensAdviceWebsite()"
});
formatter.result({
  "duration": 1453154700,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iClickEnglandAsOption()"
});
formatter.result({
  "duration": 3109541700,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iAmAbleToSeeTheListOfItems(String)"
});
formatter.result({
  "duration": 636100,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027test.tech.citizensadv.Stepdef.SearchStepdef.iAmAbleToSeeTheListOfItems(String) in file:/C:/Users/jayen/PrimeTesting/Prime%20Student%20Batch_5/Sweta/CitizensAdviceTechTest/target/test-classes/\u0027 with pattern [^I am able to see the list of items$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: And I am able to see the list of items\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Benefits",
      "offset": 22
    }
  ],
  "location": "SearchStepdef.verifyListOfItemsOnTheMainNavigationHeaderOfTheHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 201669100,
  "status": "passed"
});
formatter.before({
  "duration": 1638383700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I can see and verify the list of items on the main navigation header of the home page",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I input text \"Citizens Advice\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be navigated to Citizens Advice Website",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click England as option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am able to see the list of items",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify list of items \"Work\" on the main navigation header of the home page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdef.iAmOnGooglePage()"
});
formatter.result({
  "duration": 60460200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Citizens Advice",
      "offset": 14
    }
  ],
  "location": "SearchStepdef.iInputTextInSearchBox(String)"
});
formatter.result({
  "duration": 2217085100,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iShouldBeNavigatedToCitizensAdviceWebsite()"
});
formatter.result({
  "duration": 1462280100,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iClickEnglandAsOption()"
});
formatter.result({
  "duration": 3065989200,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iAmAbleToSeeTheListOfItems(String)"
});
formatter.result({
  "duration": 157200,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027test.tech.citizensadv.Stepdef.SearchStepdef.iAmAbleToSeeTheListOfItems(String) in file:/C:/Users/jayen/PrimeTesting/Prime%20Student%20Batch_5/Sweta/CitizensAdviceTechTest/target/test-classes/\u0027 with pattern [^I am able to see the list of items$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: And I am able to see the list of items\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 22
    }
  ],
  "location": "SearchStepdef.verifyListOfItemsOnTheMainNavigationHeaderOfTheHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 146021400,
  "status": "passed"
});
formatter.before({
  "duration": 2263174800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "I can see and verify the list of items on the main navigation header of the home page",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I input text \"Citizens Advice\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be navigated to Citizens Advice Website",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click England as option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am able to see the list of items",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify list of items \"Debt and money\" on the main navigation header of the home page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdef.iAmOnGooglePage()"
});
formatter.result({
  "duration": 58157000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Citizens Advice",
      "offset": 14
    }
  ],
  "location": "SearchStepdef.iInputTextInSearchBox(String)"
});
formatter.result({
  "duration": 3134524300,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iShouldBeNavigatedToCitizensAdviceWebsite()"
});
formatter.result({
  "duration": 808986100,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iClickEnglandAsOption()"
});
formatter.result({
  "duration": 3076019700,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iAmAbleToSeeTheListOfItems(String)"
});
formatter.result({
  "duration": 158300,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027test.tech.citizensadv.Stepdef.SearchStepdef.iAmAbleToSeeTheListOfItems(String) in file:/C:/Users/jayen/PrimeTesting/Prime%20Student%20Batch_5/Sweta/CitizensAdviceTechTest/target/test-classes/\u0027 with pattern [^I am able to see the list of items$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: And I am able to see the list of items\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Debt and money",
      "offset": 22
    }
  ],
  "location": "SearchStepdef.verifyListOfItemsOnTheMainNavigationHeaderOfTheHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 162884200,
  "status": "passed"
});
formatter.before({
  "duration": 1772311000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I can see and verify the list of items on the main navigation header of the home page",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I input text \"Citizens Advice\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be navigated to Citizens Advice Website",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click England as option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am able to see the list of items",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify list of items \"Consumer\" on the main navigation header of the home page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdef.iAmOnGooglePage()"
});
formatter.result({
  "duration": 75066400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Citizens Advice",
      "offset": 14
    }
  ],
  "location": "SearchStepdef.iInputTextInSearchBox(String)"
});
formatter.result({
  "duration": 1939703800,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iShouldBeNavigatedToCitizensAdviceWebsite()"
});
formatter.result({
  "duration": 1575266400,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepdef.iClickEnglandAsOption()"
});
