import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test("Login Test using Fluent Interface", async ({ page }) => {
  const loginPage = new LoginPage(page); //contructor je vzdy synchronni, nelze vytvaret v ramci fluent bez const
  await loginPage
    .open()
    .then((page) => page.fillUsername("pw_academy"))
    .then((page) => page.fillPassword("Playwright321!"))
    .then((page) => page.clickLogin())
    .then((dashboardPage) => dashboardPage.clickProfile())
    .then((dashboardPage) => dashboardPage.clickLogout());
});
