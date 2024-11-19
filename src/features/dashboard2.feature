@dashboard2
Feature: Dashboard 2

@3
Scenario: Dashboard page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title 3
    Given I open "Dashboard" page
    Then Page title should "be equal to" "Appointment Planner - Syncfusion Angular Components Showcase App"

@4
Scenario: Dashboard page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title 4
    Given I open "Dashboard" page
    Then Page title should "not be equal to" "Appointment Planner - Syncfusion Angular Components Showcase Appp"