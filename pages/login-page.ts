import { expect, Page } from "@playwright/test";

export class LoginPage {
  constructor(private readonly page: Page) {}

  // Elementos da tela de login
  private readonly usernameInput =
    this.page.locator('input[name="username"]');

  private readonly passwordInput =
    this.page.locator('input[name="password"]');

  private readonly loginButton =
    this.page.locator('button[type="submit"]');

  private readonly dashboardTitle =
    this.page.locator("h6", {
      hasText: "Dashboard",
    });

  // Acessa a tela de login
  async acessar(): Promise<void> {
    await this.page.goto("/web/index.php/auth/login");
  }

  // Realiza login com as credenciais informadas
  async realizarLogin(
    username: string,
    password: string
  ): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Valida se o Dashboard foi carregado
  async validarDashboard(): Promise<void> {
    await expect(this.dashboardTitle).toBeVisible();
  }
}