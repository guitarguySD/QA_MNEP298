import { test, expect } from '@playwright/test';

test('Search by driver\'s license number', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Driver\'s License Number' }).fill('D-519-202-508-234');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1980-01-01');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.getByRole('link', { name: 'View case 70-VB-25-38 details' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('1');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'View case 70-VB-25-39 details' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('1');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'View case 70-VB-25-38 details' }).click();
  await expect(page.locator('#main-content')).toContainText('Search, DL');
});

test('Search by driver\'s license number no results', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Driver\'s License Number' }).fill('P-519-202-508-234');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1980-01-01');
  await page.getByRole('button', { name: 'Find' }).click();
  await expect(page.locator('#driversLicense-empty')).toContainText('No driver\'s license was found to match your search.');
  await expect(page.locator('#main-content')).toMatchAriaSnapshot(`
    - status:
      - heading "No driver's license was found to match your search." [level=2]
      - paragraph: You may search by case or citation number.
    `);
  });

  // Test currently fails due to test data coming up as "No result found"
test('Search by driver\'s license number no eligible cases', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Driver\'s License Number' }).fill('6996164');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Alabama (AL)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Date of Birth' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Date of Birth' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1981-01-01');
  await page.getByRole('button', { name: 'Find' }).click();
  await expect(page.locator('#main-content')).toMatchAriaSnapshot(`
    - status:
      - heading "No eligible cases found to match your search." [level=2]
      - paragraph: You may search by case or citation number.
    `);
});