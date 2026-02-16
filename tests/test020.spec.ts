import { test, expect } from '@playwright/test';

test('should add and remove case from cart', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('43vb254');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('link', { name: 'Click to view' }).click();
  await expect(page.getByLabel('View case 43-VB-25-6 details')).toContainText('View');
  await page.getByRole('button', { name: 'View case 43-VB-25-6 details' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByLabel('View case 43-VB-25-6 details')).toContainText('Update');
  await expect(page.getByRole('link', { name: '1' })).toBeVisible();
  await expect(page.getByLabel('Remove case 43-VB-25-6 from')).toContainText('Remove from Cart');
  await page.getByRole('button', { name: 'Remove case 43-VB-25-6 from' }).click();
});