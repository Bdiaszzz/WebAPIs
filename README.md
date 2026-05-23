<h1 align="center">📋 Cadastro de Usuário</h1>

<p align="center">
  Formulário de cadastro com preenchimento automático de endereço via API de CEP e persistência de dados no navegador.
</p>

<p align="center">
  <img alt="HTML" src="https://img.shields.io/static/v1?label=HTML&message=5&color=e34f26&labelColor=000000">
  <img alt="CSS" src="https://img.shields.io/static/v1?label=CSS&message=3&color=1572b6&labelColor=000000">
  <img alt="JavaScript" src="https://img.shields.io/static/v1?label=JavaScript&message=ES6%2B&color=f7df1e&labelColor=000000">
  <img alt="API" src="https://img.shields.io/static/v1?label=API&message=ViaCEP&color=10b981&labelColor=000000">
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-autor">Autor</a>
</p>

<br/>

---

## 📌 Sobre o projeto

**Cadastro de Usuário** é um formulário web completo que integra a API pública [ViaCEP](https://viacep.com.br) para preenchimento automático de endereço. Ao digitar o CEP, os campos de logradouro, bairro, cidade e estado são preenchidos automaticamente — sem precisar digitar tudo manualmente. Os dados inseridos também são salvos no navegador, evitando perda de informação ao recarregar a página.

---

## ✨ Funcionalidades

- **Autopreenchimento de endereço** — ao sair do campo CEP, a API ViaCEP preenche logradouro, bairro, cidade e estado automaticamente
- **Persistência de dados** — os campos são salvos no `localStorage` a cada digitação, restaurando o formulário se a página for recarregada
- **Validação de CEP** — o sistema só faz a requisição com 8 dígitos numéricos válidos
- **Tratamento de erros** — alertas para CEP não encontrado ou falha na requisição
- **Foco automático** — após o preenchimento do CEP, o cursor vai direto para o campo Número

---

## 🚀 Tecnologias

- **HTML5** — estrutura com `form`, `fieldset` e `label` semânticos
- **CSS3** — variáveis CSS, layout responsivo e design dark mode
- **JavaScript (ES6+)** — `fetch`, `async/then`, `localStorage`, `querySelectorAll`, eventos
- **ViaCEP** — API REST pública para consulta de CEP brasileiro

---

## 🧠 Conceitos aplicados

- **Consumo de API REST** com `fetch` e tratamento de resposta `.json()`
- **localStorage** para persistência de dados entre sessões
- **Eventos de DOM** — `blur`, `input` e `DOMContentLoaded`
- **Iteração de NodeList** com `forEach`
- **Separação de responsabilidades** — funções isoladas para salvar e restaurar dados

---

## 💻 Como executar

```bash
# Clone o repositório
git clone https://github.com/Bdiaszzz/WebAPIs

# Acesse a pasta do projeto
cd WebAPIs

# Abra o index.html no navegador
# Ou use a extensão Live Server no VS Code
```

> **Nota:** O preenchimento automático de CEP requer conexão com a internet para acessar a API ViaCEP.

---

## 👨‍💻 Autor

Feito com ♥ por **Paulo Dias**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/paulo-dias-engsoftware/)
