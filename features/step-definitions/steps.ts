import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from "../pageobjects/home.page.ts";

Given(/^I am on the Homepage$/, async function () {
    await HomePage.menuAccessibility.waitForDisplayed();
});
When(/^I click on the "Accessibility" menu$/, async function () {
    await HomePage.menuAccessibility.click();
});
Then(/^I should see the "Random" menu$/, async function () {
    await expect(await HomePage.menuRandom).toBeExisting();
});
