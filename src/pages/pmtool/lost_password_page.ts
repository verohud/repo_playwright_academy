import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./login_page.ts";

export class LostPasswordPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly emailField: Locator;
  readonly sendButton: Locator;
  readonly backToLoginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator(
      ":nth-child(3) > .input-icon > .form-control",
    );
    this.usernameInput = page.locator(
      ":nth-child(2) > .input-icon > .form-control",
    );
    this.sendButton = page.locator(".btn-info");
    this.backToLoginButton = page.locator("#back-btn");
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
    return this; //po vyplneni username zustavam na lost password page, takze vracim this
  }

  async fillEmail(email: string) {
    await this.emailField.fill(email);
    return this; //po vyplneni emailu zustavam na lost password page, takze vracim this
  }

  async clickSend() {
    await this.sendButton.click();
    return new LoginPage(this.page); //po kliknuti na send button se dostanu na login page, takze vracim novy objekt login page
  }

  async clickBackToLogin() {
    await this.backToLoginButton.click();
    return new LoginPage(this.page); //po kliknuti na back to login button se dostanu na login page, takze vracim novy objekt login page
  }
}
