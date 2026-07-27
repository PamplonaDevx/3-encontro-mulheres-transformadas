# 3º Encontro Mulheres Transformadas

> Landing page oficial do 3º Encontro Mulheres Transformadas — um evento de transformação, fé e propósito.

🔗 **Acesse o site:** [https://encontromulherestransformadas.netlify.app](https://encontromulherestransformadas.netlify.app)

---

## 📌 Sobre o Projeto

Este projeto consiste em uma **landing page moderna, responsiva e de alta conversão**, desenvolvida especialmente para o 3º Encontro Mulheres Transformadas.

O objetivo principal era criar uma página simples, elegante e funcional que:
- Apresentasse o evento de forma clara e atrativa
- Transmitisse a mensagem e o propósito do encontro
- Permitisse que as mulheres se inscrevessem de forma rápida e fácil
- Armazenasse as inscrições de forma organizada e automática

Tudo foi construído com foco em **performance, simplicidade e baixo custo**, utilizando apenas ferramentas gratuitas e eficientes.

---

## ✨ Funcionalidades

- Design limpo, moderno e 100% responsivo
- Seção de apresentação do evento
- Galeria de momentos dos encontros anteriores
- Formulário de inscrição integrado
- Envio automático dos dados para Google Sheets
- Validação básica de campos
- Feedback visual após o envio
- Hospedagem rápida e gratuita na Netlify

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia              | Uso                                      |
|-------------------------|------------------------------------------|
| **HTML5**               | Estrutura da página                      |
| **CSS3**                | Estilização e responsividade             |
| **JavaScript (Vanilla)**| Interatividade e envio do formulário     |
| **Google Apps Script**  | Backend leve para receber os dados       |
| **Google Sheets**       | Banco de dados das inscrições            |
| **Netlify**             | Hospedagem e deploy contínuo             |

---

## ⚙️ Como funciona a inscrição

O formulário de inscrição envia os dados via `POST` para um **Google Apps Script** publicado como Web App.  

O script recebe as informações e grava automaticamente na planilha do Google Sheets, com os seguintes campos:

- Data da inscrição (automática)
- Nome Completo
- WhatsApp
- Cidade

Essa solução permite ter um “backend” funcional **sem custo** e sem a necessidade de servidor próprio.

---

## 📁 Estrutura do Projeto

```bash
/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos da aplicação
├── js/
│   └── script.js       # Lógica do formulário
├── assets/             # Imagens e ícones
└── README.md



