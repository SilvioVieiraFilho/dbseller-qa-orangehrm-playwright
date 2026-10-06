import { expect, Page } from "@playwright/test";

export class LoginPage {
  constructor(private readonly page: Page) {}

  // Campo de usuário
  private readonly usernameInput =
    this.page.locator('input[name="username"]');

  // Campo de senha
  private readonly passwordInput =
    this.page.locator('input[name="password"]');

  // Botão de login
  private readonly loginButton =
    this.page.locator('button[type="submit"]');

  // Título do Dashboard após o login
  private readonly dashboardTitle =
    this.page.locator("h6", {
      hasText: "Dashboard",
    });

  // Acessa a tela de login e aguarda o campo de usuário
  async acessar(): Promise<void> {
    await this.page.goto("/web/index.php/auth/login");
    await this.usernameInput.waitFor({ state: "visible" });
  }

  // Preenche as credenciais e realiza o login
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