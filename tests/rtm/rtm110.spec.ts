import { test, expect } from '@playwright/test';

test('Bulk search, case information is summarized', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).fill('D519202508234');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1980-01-01');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.getByRole('radio', { name: 'Search, DL' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('h1')).toContainText('Search Results');
  await expect(page.locator('#main-content')).toMatchAriaSnapshot(`- paragraph: Your search returned multiple results. Select a case for the case details.`);
  await expect(page.locator('#main-content')).toMatchAriaSnapshot(`
    - heading "Cases" [level=2]
    - table "Cases table":
      - rowgroup:
        - row "Number Case Number Case Type Location Status Due Amount Cart Amount Action":
          - columnheader "Number"
          - columnheader "Case Number"
          - columnheader "Case Type"
          - columnheader "Location"
          - columnheader "Status"
          - columnheader "Due Amount"
          - columnheader "Cart Amount"
          - columnheader "Action"
      - rowgroup:
        - row /1 \\d+-VB-\\d+-\\d+ Crim\\/Traf Non-Mand Scott Open \\$\\d+\\.\\d+ \\$\\d+\\.\\d+ View case \\d+-VB-\\d+-\\d+ details Remove case \\d+-VB-\\d+-\\d+ from cart/:
          - rowheader "1"
          - cell /\\d+-VB-\\d+-\\d+/
          - cell "Crim/Traf Non-Mand"
          - cell "Scott"
          - cell "Open"
          - cell /\\$\\d+\\.\\d+/
          - cell /\\$\\d+\\.\\d+/
          - cell /View case \\d+-VB-\\d+-\\d+ details/:
            - link /View case \\d+-VB-\\d+-\\d+ details/:
              - /url: /MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135
              - text: ""
          - cell /Remove case \\d+-VB-\\d+-\\d+ from cart/:
            - button /Remove case \\d+-VB-\\d+-\\d+ from cart/ [disabled]
        - row:
          - cell
        - row /2 \\d+-CV-\\d+-\\d+ Property Damage Scott Open \\$\\d+\\.\\d+ \\$\\d+\\.\\d+ View case \\d+-CV-\\d+-\\d+ details Remove case \\d+-CV-\\d+-\\d+ from cart/:
          - rowheader "2"
          - cell /\\d+-CV-\\d+-\\d+/
          - cell "Property Damage"
          - cell "Scott"
          - cell "Open"
          - cell /\\$\\d+\\.\\d+/
          - cell /\\$\\d+\\.\\d+/
          - cell /View case \\d+-CV-\\d+-\\d+ details/:
            - link /View case \\d+-CV-\\d+-\\d+ details/:
              - /url: /MNPaymentApplication/Case/CaseDetail?caseId=1629859309&payorId=1621404135
              - text: ""
          - cell /Remove case \\d+-CV-\\d+-\\d+ from cart/:
            - button /Remove case \\d+-CV-\\d+-\\d+ from cart/ [disabled]
        - row:
          - cell
    `);
});


test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Driver\'s License Number' }).fill('D519202508234');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1980-01-01');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.getByRole('link', { name: 'View case 70-VB-25-38 details' }).click();
  await page.getByRole('link', { name: 'Return to Search Results' }).click();
  await page.getByRole('link', { name: 'View case 70-VB-25-39 details' }).click();
});