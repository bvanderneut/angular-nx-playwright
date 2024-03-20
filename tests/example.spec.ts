import { test } from '@playwright/test';
import { PlaywrightHelper } from '@indy/tests/playwright/util-helpers';
// import { PlaywrightHelper as tests } from '../projects/playwright-helper/src/index.ts';

test('has title', async ({}) => {
  const temp = new PlaywrightHelper().helloWorld();
  console.log(temp);
  // const test = new tests().helloWorld();
  // console.log(test);
});
