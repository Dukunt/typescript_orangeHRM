import {test,expect} from 'playwright/test';


test.describe('smoke', () => {
test.beforeEach(async ({page}) => {
   console.log('Opening the webpage');
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
test.afterEach(async ({page}) => {
  console.log('Page has been successfully opened');
});

test ('has title',async ({ page }) => {
     await expect(page.locator("//img[@alt='company-branding']")).toBeVisible();
});

test ('login',async({page}) => {
    await page.locator("//input[@placeholder='Username']").fill("Admin");
    await page.locator("//input[@placeholder='Password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
});

});
