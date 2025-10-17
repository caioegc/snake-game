# 🐍 Snake Game - Full Stack

Um clássico **Jogo da Cobrinha** desenvolvido com **arquitetura full-stack**, apresentando **backend em Java Spring Boot** e **frontend em React**.

---

## ⚙️ Tecnologias Utilizadas

## 🧠 Back-end

| Tecnologia | Descrição |
| :--- | :--- |
| ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white) | **Linguagem principal** usada para implementar a lógica do servidor e regras do jogo. |
| ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white) | Framework que fornece estrutura rápida e eficiente para o desenvolvimento do backend. |
| ![H2 Database](https://img.shields.io/badge/H2_Database-0078D4?style=for-the-badge) | Banco de dados leve utilizado para armazenar pontuações e dados de jogadores. |

---

## 🎨 Front-end

| Tecnologia | Descrição |
| :--- | :--- |
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Biblioteca JavaScript utilizada para construir a interface interativa do jogo. |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Linguagem responsável pela lógica do jogo e comunicação com o backend. |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Responsável pelo design e estilo visual do tabuleiro e elementos do jogo. |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Estrutura base da aplicação web. |

---

## 🎮 Sobre o Projeto

Este projeto demonstra a integração entre backend Java com Spring Boot e frontend moderno com React, criando uma experiência completa de jogo com persistência de dados e ranking online.

### ✨ Funcionalidades

- **🎯 Jogo Clássico**: Cobrinha com movimentação por teclado
- **🏆 Sistema de Ranking**: Salva e exibe os melhores scores
- **⚡ API REST**: Backend robusto com endpoints RESTful
- **🎨 Interface Moderna**: Design responsivo e intuitivo
- **💾 Persistência**: Banco de dados H2 em memória

## 🏗️ Arquitetura

snake-game/

├── 📁 backend/snake-game/ # Java Spring Boot

│ ├── 📁 src/main/java/
│ │ ├── controller/ScoreController.java
│ │ ├── service/ScoreService.java
│ │ ├── repository/ScoreRepository.java
│ │ └── model/Score.java
│ └── 📁 src/main/resources/

│ └── application.properties
├── 📁 src/ # React Frontend
│ ├── components/GameBoard.js
│ ├── services/api.js
│ └── styles/Game.css
└── 📄 package.json


## 🚀 Tecnologias Utilizadas

### Backend
- **Java 17** - Linguagem principal
- **Spring Boot 3.4.10** - Framework backend
- **Spring Data JPA** - Persistência de dados
- **H2 Database** - Banco em memória
- **Maven** - Gerenciamento de dependências

### Frontend
- **React 18** - Biblioteca UI
- **CSS3** - Estilização
- **Fetch API** - Comunicação com backend

## 🛠️ Instalação e Execução

### Pré-requisitos
- Java JDK 17+
- Node.js 16+
- Maven

### Executar Backend
```bash
cd backend/snake-game
./mvnw spring-boot:run
```

### Executar Frontend
```bash
npm install
npm start
```
---
## 📡 API Endpoints
Método	Endpoint	Descrição
GET	/api/scores/leaderboard	Retorna top 10 scores
POST	/api/scores	Salva novo score
GET	/api/scores/player/{name}	Busca scores por jogador
GET	/api/scores/test	Teste da API
---
## 🎯 Como Jogar
Use as setas do teclado (↑ ↓ ← →) para controlar a cobrinha

Colete a comida vermelha 🍎 para aumentar a pontuação

Evite bater nas paredes e no próprio corpo

A velocidade aumenta a cada 50 pontos

Salve seu score no ranking ao final do jogo
---

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para:

Fork o projeto

Criar uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abrir um Pull Request

---

## 👨‍💻 Autor
caioegc - GitHub
