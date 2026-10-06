import { test } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { CandidatesPage } from "../pages/candidates-page";

const USUARIO_VALIDO = "Admin";
const SENHA_VALIDA = "admin123";

test.describe("Candidates - Method of Application", () => {

  test("Deve pesquisar candidatos por Method of Application", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const candidatesPage = new CandidatesPage(page);

    await loginPage.acessar();

    await loginPage.realizarLogin(
      USUARIO_VALIDO,
      SENHA_VALIDA
    );

    await loginPage.validarDashboard();

    await candidatesPage.acessar();

    await candidatesPage.selecionarMethodOfApplication("Manual");

    await candidatesPage.pesquisar();

    await candidatesPage.validarResultados();

    await page.screenshot({
      path: "evidence/candidates/candidates-method-manual.png",
      fullPage: true,
    });
  });

});