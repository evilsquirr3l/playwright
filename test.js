const { test, expect } = require("@playwright/test");

test("test", async ({ page }) => {
  // Go to https://www.demoblaze.com/
  await page.goto("https://www.demoblaze.com/");

  // Click text=Samsung galaxy s6
  await page.click("text=Samsung galaxy s6");
  await expect(page).toHaveURL("https://www.demoblaze.com/prod.html?idp_=1");

  // Click text=Add to cart
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click("text=Add to cart");
  await expect(page).toHaveURL("https://www.demoblaze.com/prod.html?idp_=1#");

  // Click a:has-text("About us")
  await page.click('a:has-text("About us")');

  // Click text=No compatible source was found for this media.
  await page.click("text=No compatible source was found for this media.");

  // Click :nth-match(button:has-text("Close"), 5)
  await page.click(':nth-match(button:has-text("Close"), 5)');

  // Click a:has-text("About us")
  await page.click('a:has-text("About us")');

  // Click text=No compatible source was found for this media.
  await page.click("text=No compatible source was found for this media.");

  // Click :nth-match(button:has-text("Close"), 5)
  await page.click(':nth-match(button:has-text("Close"), 5)');

  // Click a:has-text("Log in")
  await page.click('a:has-text("Log in")');

  // Click #logInModal >> text=Close
  await page.click("#logInModal >> text=Close");

  // Click a:has-text("Sign up")
  await page.click('a:has-text("Sign up")');

  // Click text=Username: Password: >> input[type="text"]
  await page.click('text=Username: Password: >> input[type="text"]');

  // Click #signInModal >> text=Close
  await page.click("#signInModal >> text=Close");

  // Click a:has-text("Log in")
  await page.click('a:has-text("Log in")');

  // Click #logInModal >> text=Close
  await page.click("#logInModal >> text=Close");

  // Click a:has-text("Sign up")
  await page.click('a:has-text("Sign up")');

  // Click text=Username: Password: >> input[type="text"]
  await page.click('text=Username: Password: >> input[type="text"]');

  // Fill text=Username: Password: >> input[type="text"]
  await page.fill('text=Username: Password: >> input[type="text"]', "зфкіут");

  // Press a with modifiers
  await page.press('text=Username: Password: >> input[type="text"]', "Meta+a");

  // Press CapsLock
  await page.press(
    'text=Username: Password: >> input[type="text"]',
    "CapsLock"
  );

  // Fill text=Username: Password: >> input[type="text"]
  await page.fill('text=Username: Password: >> input[type="text"]', "parsen");

  // Press Tab
  await page.press('text=Username: Password: >> input[type="text"]', "Tab");

  // Fill input[type="password"]
  await page.fill('input[type="password"]', "parsen");

  // Press Enter
  await page.press('input[type="password"]', "Enter");

  // Click button:has-text("Sign up")
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('button:has-text("Sign up")');

  // Click a:has-text("Log in")
  await page.click('a:has-text("Log in")');

  // Click #logInModal >> text=Username: Password: >> div
  await page.click("#logInModal >> text=Username: Password: >> div");

  // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.click(
    'text=Log in × Username: Password: Close Log in >> input[type="text"]'
  );

  // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.click(
    'text=Log in × Username: Password: Close Log in >> input[type="text"]'
  );

  // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.fill(
    'text=Log in × Username: Password: Close Log in >> input[type="text"]',
    "parsen"
  );

  // Press Tab
  await page.press(
    'text=Log in × Username: Password: Close Log in >> input[type="text"]',
    "Tab"
  );

  // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.fill(
    'text=Log in × Username: Password: Close Log in >> input[type="password"]',
    "parsen"
  );

  // Press Enter
  await page.press(
    'text=Log in × Username: Password: Close Log in >> input[type="password"]',
    "Enter"
  );

  // Click button:has-text("Log in")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.demoblaze.com/prod.html?idp_=1#' }*/),
    page.click('button:has-text("Log in")'),
  ]);
});
