Feature: duckduckgo.com

  Scenario: searching a result
    Given I open DuckDuckGo
    When I search for "puppeteer"
    Then the first result should contain "Headless Chrome Node API"
