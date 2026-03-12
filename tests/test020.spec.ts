import { test, expect } from '@playwright/test';

test('should add and remove case from cart, verify "view" "update" "remove from cart" "add to cart" buttons', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('43vb256');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859343&payorId=1621404167');
  await expect(page.getByLabel('View other payable citations')).toContainText('You may have other payable cases or citations. Click to view');
  await page.getByRole('link', { name: 'View other payable citations' }).click();
  await expect(page.getByLabel('View case 43-VB-25-6 details')).toContainText('View');
  await page.getByRole('link', { name: 'View case 43-VB-25-6 details' }).click();
  await expect(page.getByLabel('Add to Cart')).toContainText('Add to Cart');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByLabel('View case 43-VB-25-6 details')).toContainText('Update');
  await page.getByRole('link', { name: 'View case 43-VB-25-6 details' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('1');
  await page.getByRole('button', { name: 'Update Cart' }).click();
  await expect(page.locator('#main-content')).toContainText('Select items you wish to add to your cart. Cart items: 1');
  await expect(page.locator('tbody')).toContainText('Remove from Cart');
  await page.getByRole('row', { name: '1 43-VB-25-6 Crim/Traf Non-' }).getByLabel('Remove from cart').click();
  await expect(page.locator('#main-content')).toContainText('Select items you wish to add to your cart. Cart items: 0');
});