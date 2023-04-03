
Feature: todo
Login To new web page

 Scenario: Add item to the todo list
   Given a user has navigated to the homepage
   Then login to the portal with "anshika@gmail.com" and "Iamking@000"
   Then check the title of the page as "Let's Shop"