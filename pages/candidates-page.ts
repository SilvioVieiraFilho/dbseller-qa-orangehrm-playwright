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

  private readonly methodApplicationSelect = this.page
    .locator(".oxd-input-group")
    .filter({ hasText: "Method of Application" })
    .locator(".oxd-select-text");

  private readonly searchButton = this.page.getByRole("button", {
    name: "Search",
  });

  private readonly resultsTable = this.page.locator(".oxd-table");

  async acessar(): Promise<void> {
    await this.recruitmentMenu.click();
    await this.candidatesMenu.click();
  }

 async selecionarVacancy(vacancy: string): Promise<void> {
  await this.vacancySelect.click();

  const option = this.page
    .locator(".oxd-select-dropdown")
    .getByText(vacancy, { exact: true });

  await option.click();
}

  async selecionarMethodOfApplication(method: string): Promise<void> {
    await this.methodApplicationSelect.click();
    await this.page.getByText(method, { exact: true }).click();
  }

  async pesquisar(): Promise<void> {
    await this.searchButton.click();
  }

  async validarResultados(): Promise<void> {
    await expect(this.resultsTable).toBeVisible();
  }
}