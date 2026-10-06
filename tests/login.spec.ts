import { test } from "@playwright/test";
import { LoginPage } from "../pages/login-page";

const USUARIO_VALIDO = "Admin";
const SENHA_VALIDA = "admin123";

test.describe("Login - OrangeHRM", () => {

  test("Deve realizar login com credenciais válidas", async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Acessa a tela de login
    await loginPage.acessar();

    // Realiza login com credenciais válidas
    await loginPage.realizarLogin(
      USUARIO_VALIDO,
      SENHA_VALIDA
    );

    // Valida o acesso ao Dashboard
    await loginPage.validarDashboard();

    // Salva evidência do login realizado com sucesso
    await page.screenshot({
      path: "evidence/login/login-sucesso.png",
      fullPage: true,
    });
  });

});