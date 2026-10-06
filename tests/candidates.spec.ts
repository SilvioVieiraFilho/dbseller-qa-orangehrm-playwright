import { test } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { CandidatesPage } from "../pages/candidates-page";

const USUARIO_VALIDO = "Admin";
const SENHA_VALIDA = "admin123";

test.describe("Candidates - OrangeHRM", () => {

  test("Deve pesquisar candidatos por Vacancy", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const candidatesPage = new CandidatesPage(page);

    // Realiza o login
    await loginPage.acessar();
    await loginPage.realizarLogin(
      USUARIO_VALIDO,
      SENHA_VALIDA
    );
    await loginPage.validarDashboard();

    // Acessa Candidates
    await candidatesPage.acessar();

    // Seleciona a vaga
    await candidatesPage.selecionarVacancy(
      "Payroll Administrator"
    );

    // Executa a pesquisa
    await candidatesPage.pesquisar();

    // Valida os resultados
    await candidatesPage.validarResultados();

    // Salva evidência da pesquisa
    await page.screenshot({
      path: "evidence/candidates/candidates-vacancy.png",
      fullPage: true,
    });
  });

});
