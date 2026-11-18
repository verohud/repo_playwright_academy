import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Exercise E2E password using fluent interface", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .open()
    .then((login) => login.clickPasswordForgotten())
    .then((lostPassword) => lostPassword.fillUsername("test"))
    .then((lostPassword) => lostPassword.fillEmail("test@example.com"))
    .then((lostPassword) => lostPassword.clickSend());
});

test("Exercise: Click Back button in lost password", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .open()
    .then((login) => login.clickPasswordForgotten())
    .then((lostPassword) => lostPassword.clickBackToLogin());
});
