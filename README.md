# DBseller QA – OrangeHRM Playwright

Projeto desenvolvido para o desafio técnico de **QA da DBseller**, utilizando o sistema **OrangeHRM Demo**.

O projeto contempla análise funcional, definição de cenários de teste e automação de testes web utilizando **Playwright + TypeScript**.

---

## 📌 Sistema analisado

- **Sistema:** OrangeHRM Demo
- **Módulo:** Recruitment
- **URL:** https://opensource-demo.orangehrmlive.com/
- **Versão observada:** OrangeHRM OS 5.9
- **Framework:** Playwright
- **Linguagem:** TypeScript
- **Navegador:** Chromium

---

## 📂 Estrutura do projeto

```text
dbseller-qa-orangehrm-playwright/
│
├── evidence/
│   ├── login/
│   └── candidates/
│
├── pages/
│   ├── login-page.ts
│   └── candidates-page.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── candidates.spec.ts
│   └── candidates-method.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

### `tests/`

Contém os cenários automatizados:

- `login.spec.ts` – validação do login;
- `candidates.spec.ts` – pesquisa de candidatos por Vacancy;
- `candidates-method.spec.ts` – pesquisa por Method of Application.

### `pages/`

Contém as classes utilizadas no padrão **Page Object Model**:

- `login-page.ts`
- `candidates-page.ts`

### `evidence/`

Armazena as evidências geradas durante os testes automatizados.

### `playwright.config.ts`

Centraliza as configurações do Playwright, como:

- URL base;
- navegador;
- timeout;
- screenshots;
- vídeos;
- trace;
- relatório HTML.

---

# ⚙️ Pré-requisitos

Para executar o projeto, é necessário possuir:

- Node.js
- npm

Verifique a instalação:

```bash
node -v
npm -v
```

---

# 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/SilvioVieiraFilho/dbseller-qa-orangehrm-playwright.git
```

Entre na pasta:

```bash
cd dbseller-qa-orangehrm-playwright
```

Instale as dependências:

```bash
npm install
```

Instale o Chromium utilizado pelo Playwright:

```bash
npx playwright install chromium
```

---

# 🧪 Execução dos testes

## Executar todos os testes

```bash
npm test
```

## Executar somente o teste de Login

```bash
npm run test:login
```

## Executar os testes com o navegador aberto

```bash
npm run test:headed
```

## Executar o teste de Candidates

```bash
npx playwright test tests/candidates.spec.ts
```

## Executar o teste de Method of Application

```bash
npx playwright test tests/candidates-method.spec.ts
```

---

# 📊 Relatório Playwright

Após a execução dos testes, o relatório HTML pode ser aberto utilizando:

```bash
npm run report
```

O relatório permite visualizar:

- Cenários executados;
- Status dos testes;
- Tempo de execução;
- Screenshots;
- Informações de falha;
- Trace, quando disponível;
- Vídeos de testes que falharam.

---

# 🔎 Cenários automatizados

## 1. Login com credenciais válidas

**Objetivo:** validar o acesso ao sistema utilizando credenciais válidas.

### Fluxo

1. Acessar a tela de login;
2. Informar usuário;
3. Informar senha;
4. Clicar em Login;
5. Validar o Dashboard.

### Resultado esperado

O usuário deve acessar o sistema e visualizar o Dashboard.

---

## 2. Pesquisa de Candidates por Vacancy

**Objetivo:** validar a pesquisa de candidatos utilizando uma vaga existente.

### Fluxo

1. Realizar login;
2. Acessar Recruitment;
3. Acessar Candidates;
4. Selecionar a Vacancy `Payroll Administrator`;
5. Executar Search;
6. Validar os resultados;
7. Gerar evidência.

### Resultado esperado

A aplicação deve apresentar os candidatos correspondentes à vaga selecionada.

---

## 3. Pesquisa por Method of Application

**Objetivo:** validar o filtro `Method of Application`.

### Fluxo

1. Realizar login;
2. Acessar Recruitment;
3. Acessar Candidates;
4. Selecionar `Manual`;
5. Executar Search;
6. Validar os resultados;
7. Gerar evidência.

### Resultado esperado

A aplicação deve apresentar os candidatos correspondentes ao método de aplicação selecionado.

A opção `Manual` foi utilizada porque havia massa de teste disponível no ambiente durante a análise.

---

# 🧱 Padrão Page Object Model

O projeto utiliza **Page Object Model (POM)** para separar a estrutura das páginas das regras dos testes.

Exemplo:

```text
tests/
    login.spec.ts
    candidates.spec.ts

pages/
    login-page.ts
    candidates-page.ts
```

Com essa abordagem, os elementos e ações das páginas ficam centralizados, facilitando a manutenção e reutilização dos componentes nos testes.

---

# 📸 Evidências

As evidências dos testes automatizados ficam organizadas na pasta:

```text
evidence/
```

Estrutura:

```text
evidence/
├── login/
│   └── login-sucesso.png
│
└── candidates/
    ├── candidates-vacancy.png
    └── candidates-method-manual.png
```

As imagens são utilizadas para demonstrar o resultado visual dos cenários automatizados.

---

# ⚙️ Configuração do Playwright

O projeto está configurado para:

- Executar utilizando Chromium;
- Utilizar o OrangeHRM Demo como `baseURL`;
- Executar em modo headless por padrão;
- Gerar screenshots;
- Manter vídeo em caso de falha;
- Gerar trace após retry;
- Gerar relatório HTML.

---

# 🔐 Dados de acesso

O ambiente de demonstração utiliza:

```text
Usuário: Admin
Senha: admin123
```

Essas credenciais pertencem ao ambiente público de demonstração do OrangeHRM.

---

# ⚠️ Observações sobre o ambiente

O OrangeHRM utilizado no desafio é um ambiente público e compartilhado.

Por isso, a massa de dados pode sofrer alterações durante a execução dos testes.

Durante a análise manual foram identificadas algumas limitações:

- Não havia candidatos com status `Hired`;
- Não havia candidatos com Method of Application `Online`;
- O filtro Hiring Manager possuía opções sem candidatos correspondentes;
- Alguns registros apresentavam `Hiring Manager = (Deleted)`.

Essas situações foram tratadas como **limitações ou observações de massa de teste**, e não classificadas automaticamente como defeitos funcionais.

---

# 📋 Análise manual

Além da automação, o desafio contempla um documento contendo:

- Análise funcional;
- Evidências dos testes;
- Identificação da massa de dados;
- Cenários de teste;
- Critérios de aceitação;
- Análise de riscos;
- BDD/Gherkin;
- Estratégia de regressão;
- Investigação de Timesheet;
- Cenários negativos;
- Limitações do ambiente;
- Estratégia de automação.

---

# 🎯 Próximas possibilidades de automação

A estrutura criada permite expandir a automação para outros cenários, como:

- Pesquisa sem filtros;
- Reset dos filtros;
- Pesquisa sem resultados;
- Combinação de filtros;
- Filtro por Status;
- Cadastro de nova candidatura;
- Validações negativas do formulário;
- Alteração do status da candidatura;
- Conversão de candidato em colaborador;
- Prevenção de duplicidade.

---

# 👨‍💻 Autor

**Silvio Rodrigues Vieira Filho**

QA | Analista de Qualidade

GitHub:
https://github.com/SilvioVieiraFilho

LinkedIn:
https://linkedin.com/in/silvio-analyst
# dbseller-qa-orangehrm-playwright
