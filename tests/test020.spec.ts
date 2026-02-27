import { test, expect } from '@playwright/test';

test('should add and remove case from cart, verify "view" "update" "remove from cart" "add to cart" buttons', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill('43vb254');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('link', { name: 'View other payable citations' }).click();
  await expect(page.getByLabel('View case 43-VB-25-6 details')).toContainText('View');
  await page.getByRole('link', { name: 'View case 43-VB-25-6 details' }).click();
  await expect(page.getByLabel('Add to cart')).toContainText('Add to Cart');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByLabel('View case 43-VB-25-6 details')).toContainText('Update');
  await expect(page.getByLabel('Remove case 43-VB-25-6 from')).toContainText('Remove from Cart');
  await expect(page.getByRole('link', { name: 'Shopping Cart (1 items)' })).toBeVisible();
  await expect(page.getByText('Select items you wish to add')).toBeVisible();
  await page.getByRole('button', { name: 'Remove case 43-VB-25-6 from' }).click();
  await expect(page.locator('#main-content')).toContainText('Select items you wish to add to your cart. Cart items: 0');
});