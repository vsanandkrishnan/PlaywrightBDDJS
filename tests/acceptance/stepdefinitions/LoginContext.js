const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");

const url = "https://rahulshettyacademy.com/client";

Given("a user has navigated to the homepage", async function () {
  page.goto(url);
});

Then(
  "login to the portal with {string} and {string}",
  async function (user, pass) {
    await page.locator("#userEmail").fill(user);
    await page.locator("#userPassword").fill(pass);
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
  }
);

Then("check the title of the page as {string}", async function (title) {
  // Write code here that turns the phrase above into concrete actions
  const titleDesc = await page.title();
  await expect(page).toHaveTitle(title);
});
