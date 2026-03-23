# 🚀 Desafio Mercafácil - Microservices com Apollo Federation

## 📌 Descrição

Este projeto foi desenvolvido como solução para o desafio técnico
utilizando uma arquitetura baseada em **microserviços** com **GraphQL
Federation**.

A aplicação é composta por três serviços:

-   **Gateway** → ponto único de entrada da API
-   **Content Service** → responsável por buscar personagens (API
    externa)
-   **Review Service** → responsável por gerenciar avaliações

------------------------------------------------------------------------

## 🧱 Arquitetura

                ┌──────────────┐
                │   Gateway    │
                │ (Apollo Fed) │
                └──────┬───────┘
                       │
         ┌─────────────┴─────────────┐
         │                           │
    ┌──────────────┐         ┌──────────────┐
    │ Content      │         │ Review       │
    │ Service      │         │ Service      │
    └──────────────┘         └──────────────┘

------------------------------------------------------------------------

## ⚙️ Tecnologias

-   Node.js
-   TypeScript
-   Apollo Server
-   Apollo Gateway
-   GraphQL
-   Express
-   Docker (opcional)

------------------------------------------------------------------------

## 🧠 Decisões técnicas

-   Uso de **Apollo Federation** para desacoplamento
-   Separação por camadas (resolver, service, repository/provider)
-   Injeção de dependência manual
-   Interfaces para desacoplamento
-   Armazenamento em memória no review-service

------------------------------------------------------------------------

## ▶️ Como rodar (sem Docker)

### Content Service

``` bash
cd content-service
npm install
npm run dev
```

### Review Service

``` bash
cd review-service
npm install
npm run dev
```

### Gateway

``` bash
cd gateway
npm install
npm run dev
```

Gateway disponível em: http://localhost:4000

------------------------------------------------------------------------

## 🧪 Testes

### Criar review

``` graphql
mutation {
  createReview(input: {
    characterId: "1"
    rating: 5
    comment: "Muito bom!"
  })
}
```

### Buscar dados

``` graphql
query {
  character(id: "1") {
    name
    reviews {
      rating
      comment
    }
  }
}
```

------------------------------------------------------------------------

## 🐳 Docker

``` bash
docker-compose up --build
```

------------------------------------------------------------------------

## 📌 Melhorias futuras

-   Persistência com banco de dados
-   Cache com Redis
-   Testes automatizados
-   Logs estruturados
-   CI/CD
