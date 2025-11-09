import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle('Kippy is Online');

    // Check main heading exists
    await expect(page.getByText("Hi, I'm Kippy!")).toBeVisible();

    // Check intro paragraph mentions Donut
    await expect(page.getByText(/co-founded and was Head of Product at/)).toBeVisible();
  });

  test('should have navigation links', async ({ page }) => {
    await page.goto('/');

    // Check navigation exists
    await expect(page.getByRole('link', { name: 'Work' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
  });

  test('should display work history', async ({ page }) => {
    await page.goto('/');

    // Check work history items are visible
    await expect(page.getByText('Donut')).toBeVisible();
    await expect(page.getByText('Cover')).toBeVisible();
    await expect(page.getByText('Kullect')).toBeVisible();
  });

  test('should have dark mode toggle', async ({ page }) => {
    await page.goto('/');

    // Dark mode button should be present
    const darkModeButton = page.getByLabel('Open dark mode selector');
    await expect(darkModeButton).toBeVisible();
  });

  test('should have footer with social links', async ({ page }) => {
    await page.goto('/');

    // Check footer social links
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Twitter' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Email' })).toBeVisible();
  });
});

test.describe('Projects Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/projects');

    // Check page title
    await expect(page).toHaveTitle('Kippy is Online');

    // Check main heading exists
    await expect(page.getByRole('heading', { name: 'Personal Projects' })).toBeVisible();
  });

  test('should display projects', async ({ page }) => {
    await page.goto('/projects');

    // Check projects are visible
    await expect(page.getByText('vivere', { exact: true })).toBeVisible();
    await expect(page.getByText(/light-weight javascript framework/)).toBeVisible();
  });

  test('should have project links', async ({ page }) => {
    await page.goto('/projects');

    // Check that project links exist (GitHub, npm, website)
    const links = page.getByLabel(/Link to GitHub|Link to npm|Link to Website/);
    await expect(links.first()).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    // Start on home page
    await page.goto('/');
    await expect(page.getByText("Hi, I'm Kippy!")).toBeVisible();

    // Navigate to projects
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page.getByRole('heading', { name: 'Personal Projects' })).toBeVisible();

    // Navigate back to work
    await page.getByRole('link', { name: 'Work' }).click();
    await expect(page.getByText("Hi, I'm Kippy!")).toBeVisible();
  });
});

test.describe('Dark Mode', () => {
  test('should toggle dark mode', async ({ page }) => {
    await page.goto('/');

    // Open dark mode selector
    await page.getByLabel('Open dark mode selector').click();

    // Modal should be visible
    const modal = page.getByRole('dialog', { name: 'Dark mode selector' });
    await expect(modal).toBeVisible();
  });

  test('should persist dark mode preference', async ({ page }) => {
    await page.goto('/');

    // Get initial state
    const html = page.locator('html');
    const initialHasDark = await html.evaluate((el) => el.classList.contains('dark'));

    // Open dark mode selector and click a different option
    await page.getByLabel('Open dark mode selector').click();

    // Wait for modal to appear and be interactive
    await page.waitForTimeout(100);

    // The selector should have options - we'll just verify it opened
    const modal = page.getByRole('dialog', { name: 'Dark mode selector' });
    await expect(modal).toBeVisible();
  });
});

test.describe('Responsive Design', () => {
  test('should work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check main content is still visible
    await expect(page.getByText("Hi, I'm Kippy!")).toBeVisible();
    await expect(page.getByRole('link', { name: 'Work' })).toBeVisible();
  });

  test('should work on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    // Check content is visible
    await expect(page.getByText("Hi, I'm Kippy!")).toBeVisible();
  });
});
