import { Given, When } from '@wdio/cucumber-framework';
import { pages } from '../po';

Given('I open {string} page', function (pageName) {
  return pages(pageName).open();
});

When('I click {string} link from the side menu', function (link) {
  return pages('dashboard').sideMenu.item(link).click();
});

When('I click add new doctor button from list header', function () {
  return pages('doctors').doctorsListHeader.addNewDoctorBtn.click();
});

When('I click {string} button in modal window', function (button) {
  return pages('doctors').addDoctorModal.clickButton(button);
});

