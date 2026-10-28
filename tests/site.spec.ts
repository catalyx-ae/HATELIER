import { test, expect } from '@playwright/test';
const routes = ['/', '/fragrances', '/fragrances/venice', '/our-story', '/contact'];
for (const route of routes) {
  test(`page ${route} renders without overflow or dead internal links`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const links = await page.locator('a[href^="/"]').evaluateAll(els => [...new Set(els.map(el => el.getAttribute('href')))]);
    for (const link of links) expect(routes).toContain(link);
    expect(errors).toEqual([]);
  });
}
test('home discovery leads to real fragrance details', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Discover the fragrance', exact: true }).click();
  await expect(page).toHaveURL('/fragrances/venice');
  await expect(page.getByRole('heading', { name: 'VENICE', exact: true })).toBeVisible();
  await expect(page.getByText('Purchase enquiries will open')).toBeVisible();
  await page.getByText('The details', { exact: true }).click();
  await expect(page.locator('dd', { hasText: '50 ml' })).toBeVisible();
  await page.getByRole('link', { name: 'Discover the composition' }).click();
  await expect(page).toHaveURL(/#composition$/);
  await expect(page.getByRole('heading', { name: 'Top notes' })).toBeVisible();
});
test('unconfigured commerce and channels are represented honestly', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByText('Our direct contact channels are being prepared.')).toBeVisible();
  await expect(page.locator('a[href^="mailto:"], a[href*="wa.me"], form')).toHaveCount(0);
  await expect(page.getByRole('link', { name: /shopping bag|checkout/i })).toHaveCount(0);
});
test('mobile navigation supports keyboard and closes on route change', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile-specific navigation');
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Open navigation' });
  await toggle.click();
  const nav = page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(nav).toBeVisible();
  await expect(nav.getByRole('link', { name: /Home/  })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(nav).toHaveCount(0);
  await expect(toggle).toBeFocused();
  await toggle.click();
  await nav.getByRole('link', { name: /Our Story/ }).click();
  await expect(page).toHaveURL('/our-story');
  await expect(nav).toHaveCount(0);
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');
});
test('unknown page has a useful return path', async ({ page }) => {
  const response = await page.goto('/does-not-exist');
  expect(response?.status()).toBe(404);
  await page.getByRole('link', { name: 'Return to HATELIER' }).click();
  await expect(page).toHaveURL('/');
});
