import { defineConfig, devices } from "@playwright/test";

// Importa as funções do Playwright usadas para configurar o projeto.
// defineConfig = cria a configuração do Playwright.
// devices = permite utilizar configurações prontas de navegadores/dispositivos.

export default defineConfig({

  // Define onde estão localizados os arquivos de teste.
  testDir: "./tests",

  // Impede que os testes sejam executados em paralelo.
  // Isso deixa a execução mais previsível, principalmente durante o desenvolvimento.
  fullyParallel: false,

  // Tempo máximo para cada teste terminar.
  // Aqui: 30 segundos.
  timeout: 30_000,

  // Configura o tempo máximo das validações (expect).
  expect: {
    timeout: 5_000, // 5 segundos
  },

  // Configurações que serão utilizadas pelos testes.
  use: {

    // URL base da aplicação.
    // Assim podemos utilizar page.goto("/web/index.php/auth/login")
    // em vez de informar a URL completa.
    baseURL: "https://opensource-demo.orangehrmlive.com",

    // Define o navegador utilizado nos testes.
    browserName: "chromium",

    // Executa os testes sem abrir a janela do navegador.
    // true = execução em segundo plano.
    headless: true,

    // Tira screenshots automaticamente durante os testes.
    screenshot: "on",

    // Grava vídeo somente quando o teste falhar.
    // Ajuda na investigação de erros.
    video: "retain-on-failure",

    // Salva informações de rastreamento quando houver uma nova tentativa
    // após uma falha.
    // O Trace permite analisar passo a passo o que aconteceu.
    trace: "on-first-retry",

    // Define o tempo máximo para cada ação do Playwright,
    // como clicar, preencher campo, localizar elemento etc.
    // Aqui: 10 segundos.
    actionTimeout: 10_000,
  },

  // Define os relatórios gerados pelo Playwright.
  reporter: [

    // Mostra o resultado dos testes diretamente no terminal.
    ["list"],

    // Gera um relatório HTML.
    ["html", {
      outputFolder: "playwright-report",
      open: "never",
    }],
  ],

  // Define os projetos/navegadores utilizados nos testes.
  projects: [

    {
      // Nome do projeto.
      name: "chromium",

      use: {

        // Utiliza a configuração de Desktop Chrome fornecida
        // pelo próprio Playwright.
        ...devices["Desktop Chrome"],
      },
    },
  ],
});