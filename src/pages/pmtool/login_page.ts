import { Locator, Page } from "@playwright/test";
import { DashboardPage } from "./dashboard_page.ts";
import { LostPasswordPage } from "./lost_password_page.ts";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool"; // Bude jen v prvnim PO, kde budeme otevirat aplikaci
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly lostPasswordButton: Locator;

  constructor(page: Page) {
    this.page = page; //Nastaveni stranky (abychom mohli integrovat s prohlizecem
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('[type="submit"]');
    this.lostPasswordButton = page.locator("#forget_password");
  }

  async open() {
    await this.page.goto(this.url);
    return this; //po otevreni zustavam na login page - davam return this, abych mohl volat dalsi metody z teto tridy
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    return this;
  }

  async clickLogin() {
    await this.loginButton.click();
    return new DashboardPage(this.page); //po kliknuti na login button se dostanu na dashboard page, takze vracim novy objekt dashboard page
  }

  async clickPasswordForgotten() {
    await this.lostPasswordButton.click();
    return new LostPasswordPage(this.page); //po kliknuti na lost password button se dostanu na lost password page, takze vracim novy objekt lost password page
  }

  //Explicitni typ navratove hodnoty je Promise<DashboardPage>, protoze tato metoda vraci instanci DashboardPage po uspesnem prihlaseni
  async login(username: string, password: string): Promise<DashboardPage> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
    return new DashboardPage(this.page); //po uspesnem prihlaseni se dostanu na dashboard page, takze vracim novy objekt dashboard page
  }
}
