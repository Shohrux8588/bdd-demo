import { Then } from '@wdio/cucumber-framework';
import compareText from './utils/compare-text';
import { pages } from '../po';

Then('Page title should {string} {string}', async function (shouldBeparameter, titleText) {
  const pageTitle = await browser.getTitle();
  return compareText(pageTitle, titleText, shouldBeparameter);
});

Then(/^modal window should( not)? be displayed$/, async (param) => {
  let assert = expect(pages('doctors').addDoctorModal.rootEl);
  if (param) {
    assert = assert.not;
  }

  return assert.toBeDisplayed;
});
