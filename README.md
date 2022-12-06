# Protótipo "B" do Horário Estudantil.

## Sobre

O horário estudantil surge para manipular e divulgar horários de instituições de ensino.

**Breaking changes podem ocorrer neste protótipo sem indicação prévia**.

## Infraestrutura

| Serviço                                                          | Descrição            | Plataforma      |
|------------------------------------------------------------------| -------------------- |-----------------|
| [app-service](./services/app-service/)                           | Camada de Aplicação. | NextJS; node@16 |
| [endpoint-service](./services/endpoint-service/)                 | Camada de Servidor.  | NestJS; node@16 |

| Serviço                                         | Descrição                              | Plataforma        |
|-------------------------------------------------|----------------------------------------|-------------------|
| [database-service](./services/database-service) | Banco de dados geral da aplicação.     | postgres@15       | 
| [auth-service](./services/auth-service)         | Plataforma de Autenticação OAuth/OIDC. | keycloak@19       |
| [search-service](./services/search-service)     | Motor de indexação e busca.            | meilisearch@v0.29 |

### Projetos Anteriores

- Horário IFRO Ji-Paraná - <https://github.com/horarios-ifro/>

## Licensa

- Entre em contato comigo em `gabrielrodantunes` `[arroba]` `gmail.com`.
