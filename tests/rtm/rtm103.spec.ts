import { test, expect } from '@playwright/test';

test('Search by driver\'s license number', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).fill('D-519-202-508-234');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1980-01-01');
  await page.getByRole('button', { name: 'Find cases by driver\'s' }).click();
  await page.getByRole('radio', { name: 'testing, defendant' }).check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await page.getByRole('link', { name: 'View other payable citations' }).click();
  await page.getByRole('link', { name: 'View case 25-CR-25-3 details' }).click();
  await page.getByRole('link', { name: 'Return to Search Results' }).click();
  await page.getByRole('link', { name: 'View case 70-CV-25-40 details' }).click();
  await page.getByRole('link', { name: 'Return to Search Results' }).click();
  await page.getByRole('link', { name: 'View case 70-CV-25-41 details' }).click();
  await page.getByRole('link', { name: 'Return to Search Results' }).click();
  await page.getByRole('link', { name: 'View case 70-CV-25-47 details' }).click();
  await page.getByRole('link', { name: 'Return to Search Results' }).click();
  await page.getByRole('link', { name: 'Search again' }).click();
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).fill('D-519-202-508-234');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1980-01-01');
  await page.getByRole('button', { name: 'Find cases by driver\'s' }).click();
  await page.getByRole('radio', { name: 'Search, DL' }).check();
  await expect(page.locator('tbody')).toContainText('Search, DL');
  await page.getByRole('radio', { name: 'Search, DL' }).check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await page.getByRole('link', { name: 'View case 70-VB-25-39 details' }).click();
  await expect(page.locator('#main-content')).toContainText('Search, DL');
  await expect(page.locator('#main-content')).toContainText('Crim/Traf Non-Mand');
});

test('Search by driver\'s license number no results', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).fill('P-519-202-508-234');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1980-01-01');
  await page.getByRole('button', { name: 'Find cases by driver\'s' }).click();
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
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).fill('6996164');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Alabama (AL)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Date of Birth' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Date of Birth' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1981-01-01');
  await page.getByRole('button', { name: 'Find cases by driver\'s' }).click();
  await expect(page.locator('#main-content')).toMatchAriaSnapshot(`
    - status:
      - heading "No eligible cases found to match your search." [level=2]
      - paragraph: You may search by case or citation number.
    `);
});