import { Locator, Page } from "@playwright/test";

export class LostPasswordPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly emailField: Locator;
  readonly sendButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator(
      ":nth-child(3) > .input-icon > .form-control",
    );
    this.usernameInput = page.locator(
      ":nth-child(2) > .input-icon > .form-control",
    );
    this.sendButton = page.locator(".btn-info");
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillEmail(email: string) {
    await this.emailField.fill(email);
  }

  async clickSend() {
    await this.sendButton.click();
  }
}
