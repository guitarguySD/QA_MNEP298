import { test, expect } from '@playwright/test';

test('should display insurance proof warning message for no insurance charge', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('row', { name: 'Name Not Available Name Not Available, Amount owed: $249.00 $' }).getByLabel('Name Not Available').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.getByLabel('Make Payment')).toMatchAriaSnapshot(`
    - listitem:
      - text: If you have been charged with
      - strong: No Insurance
      - text: or
      - strong: No Proof of Insurance
      - text: and you can provide proof of insurance, do not pay at this time.
      - list:
        - listitem: If the vehicle you were driving was insured at that time or if you are not the owner of the vehicle you were driving and can provide the name and address of the owner, you may be able to have this charge dismissed by providing proof of insurance coverage,
        - listitem: Proof of insurance or the name and address of the owner of the vehicle must be provided to court administration no later than the date and time of your first court appearance.
        - listitem: Proof must include the insurance card, name of insurance company, policy number, insurance agent name and phone number, and effective and ending dates of coverage. Be sure to include your case or citation number with proof of insurance.
    `);
});