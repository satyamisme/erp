import { test, expect } from '@playwright/test';

test('login and navigate to POS and Dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Should show login page initially
  await expect(page.locator('text=Operator Authentication')).toBeVisible();

  // Change role to Cashier
  await page.selectOption('select', 'CSH');

  // Submit login
  await page.click('button[type="submit"]');

  // Should navigate to terminal (POS)
  await expect(page.locator('text=Active Cart')).toBeVisible();

  // Test adding product to cart
  const productCard = page.locator('.bg-surface.border.cursor-pointer').first();
  await productCard.click();

  // Verify 1 item in cart
  await expect(page.locator('text=1 ITEMS')).toBeVisible();

  // Navigate via sidebar to Inventory
  await page.click('text=Inventory');

  // Verify inventory loads
  await expect(page.locator('text=Inventory Matrix').first()).toBeVisible();
});
