Feature: Homepage

  Scenario: Menu verification

    Given I am on the Homepage
    When I click on the "Accessibility" menu
    Then I should see the "Random" menu
