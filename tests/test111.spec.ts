import { test, expect } from '@playwright/test';

test('Color Contrast of breadcrumbs', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');

  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  const homeLink = page.getByRole('link', { name: 'Home' });
  
  // Extract computed colors
  const colors = await homeLink.evaluate((element) => {
    const styles = window.getComputedStyle(element);
    return {
      color: styles.color,
      backgroundColor: styles.backgroundColor
    };
  });

  // Helper function to convert RGB to hex and parse
  function getRGBValues(rgbString: string): { r: number; g: number; b: number } {
    const match = rgbString.match(/\d+/g);
    if (!match || match.length < 3) throw new Error(`Invalid RGB: ${rgbString}`);
    return { r: parseInt(match[0]), g: parseInt(match[1]), b: parseInt(match[2]) };
  }

  // Calculate relative luminance
  function getLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map(val => {
      val = val / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  // Calculate contrast ratio
  const fgRGB = getRGBValues(colors.color);
  const bgRGB = getRGBValues(colors.backgroundColor);
  
  const fgLuminance = getLuminance(fgRGB.r, fgRGB.g, fgRGB.b);
  const bgLuminance = getLuminance(bgRGB.r, bgRGB.g, bgRGB.b);
  
  const lighter = Math.max(fgLuminance, bgLuminance);
  const darker = Math.min(fgLuminance, bgLuminance);
  const contrastRatio = (lighter + 0.05) / (darker + 0.05);

  console.log(`Foreground color: ${colors.color}`);
  console.log(`Background color: ${colors.backgroundColor}`);
  console.log(`Contrast ratio: ${contrastRatio.toFixed(2)}:1`);
  console.log(`WCAG AA (4.5:1): ${contrastRatio >= 4.5 ? 'PASS' : 'FAIL'}`);
  //console.log(`WCAG AAA (7:1): ${contrastRatio >= 7 ? 'PASS' : 'FAIL'}`);

  // Assert minimum WCAG AA compliance
  expect(contrastRatio).toBeGreaterThanOrEqual(4.5);

  await homeLink.click({
    button: 'right'
  });
});