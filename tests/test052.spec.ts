import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('66-T3-95-006846');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();

  await expect(page.getByRole('heading', { name: 'Unable to Make Payment' })).toBeVisible();

  const link = page.getByRole('link', {
  name: /contact district court/i
});

await expect(link).toHaveAttribute(
  'href',
  'https://mncourts.gov/find-courts.aspx'
);

const contactCourtRegion = page.getByRole('region', {
  name: 'Contact Court Administration'
});

await expect(contactCourtRegion).toContainText(
  'This case is not able to be paid using this system.'
);

await expect(contactCourtRegion).toContainText(
  'Please contact district court administration regarding this case.'
);
});