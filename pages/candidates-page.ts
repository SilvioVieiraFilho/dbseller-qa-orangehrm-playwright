import { expect, Page } from "@playwright/test";

export class CandidatesPage {
  constructor(private readonly page: Page) {}

  // Elementos da tela de Candidates
  private readonly recruitmentMenu = this.page.getByText("Recruitment", {
    exact: true,
  });

  private readonly candidatesMenu = this.page.getByRole("link", {
    name: "Candidates",
  });

  private readonly vacancySelect = this.page
    .locator(".oxd-input-group")
    .filter({ hasText: "Vacancy" })
    .locator(".oxd-select-text");

  private readonly searchButton = this.page.getByRole("button", {
    name: "Search",
  });

  private readonly resultsTable = this.page.locator(".oxd-table");

  // Acessa a tela de Candidates
  async acessar(): Promise<void> {
    await this.recruitmentMenu.click();
    await this.candidatesMenu.click();
  }

  // Seleciona uma vaga
  async selecionarVacancy(vacancy: string): Promise<void> {
    await this.vacancySelect.click();
    await this.page.getByText(vacancy, { exact: true }).click();
  }

  // Executa a pesquisa
  async pesquisar(): Promise<void> {
    await this.searchButton.click();
  }

  // Valida se a tabela de resultados foi carregada
  async validarResultados(): Promise<void> {
    await expect(this.resultsTable).toBeVisible();
  }
}

