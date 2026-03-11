import { test, expect } from '@playwright/test';

test('Search page displays information for adult criminal case', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('70vb2539');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Case Number:');
  await expect(page.locator('#main-content')).toContainText('70-VB-25-39');
  await expect(page.locator('#main-content')).toContainText('Citation Number:');
  await expect(page.locator('#main-content')).toContainText('51920250826');
  await expect(page.locator('#main-content')).toContainText('Case Type:');
  await expect(page.locator('#main-content')).toContainText('Crim/Traf Non-Mand');
  await expect(page.locator('#main-content')).toContainText('Case Location:');
  await expect(page.locator('#main-content')).toContainText('Scott');
  await expect(page.locator('#main-content')).toContainText('Case Status:');
  await expect(page.locator('#main-content')).toContainText('Open');
  await expect(page.locator('#main-content')).toContainText('Date Filed:');
  await expect(page.locator('#main-content')).toContainText('05/19/2025');
  await expect(page.locator('#main-content')).toContainText('Offenses:');
  await expect(page.locator('#main-content')).toContainText('05/19/2025 - Game and Fish-Hunter/Trapper/Angler-Harassment');
  await expect(page.locator('#main-content')).toContainText(/((\bTicket\b)|(\bCitation\b)) Date:/);
  await expect(page.locator('#main-content')).toContainText('05/19/2025');
});

test('Search page displays information for juvenile case', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('25jv254');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859391&payorId=1621404209');
  await expect(page.locator('#main-content')).toMatchAriaSnapshot(`
    - text: "/Case Number: \\\\d+-JV-\\\\d+-4 Citation Number: \\\\d+ Party Name: Testing, Juvenile Party Connection: Child \\\\(Juvenile\\\\) Case Type: Juvenile Petty Offense Case Location: Goodhue Case Status: Closed Date Filed: \\\\d+\\\\/\\\\d+\\\\/\\\\d+ Offenses:/"
    - list:
      - listitem: /\\d+\\/\\d+\\/\\d+ - Under \\d+ Attempt to Buy Alcohol/
    - text: "/Citation Date: \\\\d+\\\\/\\\\d+\\\\/\\\\d+ Total Amount Due: \\\\$\\\\d+\\\\.\\\\d+/"
    `);
});

test('Search page displays information for adult civil case', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('70cv2540');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.getByRole('radio', { name: 'testing, defendant' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('#main-content')).toMatchAriaSnapshot(`- text: "/Case Number: \\\\d+-CV-\\\\d+-\\\\d+ Party Name: testing, defendant Party Connection: Defendant Case Type: Property Damage Case Location: Scott Case Status: Open Date Filed: \\\\d+\\\\/\\\\d+\\\\/\\\\d+ Total Amount Due: \\\\$\\\\d+\\\\.\\\\d+/"`);
});