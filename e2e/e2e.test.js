import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeEach(async () => {
    try {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 500,
        devtools: true,
      });
    } catch (e) {
      console.error(e);
    }
    page = await browser.newPage();
  });

  afterEach(async () => {
    if (browser) {
      await browser.close();
    }
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.input');
    const button = await page.$('.submit');
    await input.type('3530111333300000');
    await button.click();
    await page.waitForSelector('.input.valid');
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.input');
    const button = await page.$('.submit');
    await input.type('3530111333300');
    await button.click();
    await page.waitForSelector('.input.novalid');
  });
});
