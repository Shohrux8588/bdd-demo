import { Before } from '@wdio/cucumber-framework';

Before({ name: 'console log', tags: '@1' }, () => {
  return console.log('before hook');
});
