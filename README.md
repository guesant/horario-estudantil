# Protótipo "B" do Horário Estudantil.

## Sobre

O horário estudantil surge para manipular e divulgar horários de instituições de ensino.

**Breaking changes podem ocorrer neste protótipo sem indicação prévia**.

## Infraestrutura

| Serviço                                                          | Descrição            |
|------------------------------------------------------------------| -------------------- |
| [app-service](./services/app-service/)                           | Camada de Aplicação. |
| [endpoint-service](./services/endpoint-service/)                 | Camada de Servidor.  |

| Serviço                                         | Plataforma                                    | Descrição                              |
|-------------------------------------------------|-----------------------------------------------| -------------------------------------- |
| [database-service](./services/database-service) | postgres@15     | Banco de dados geral da aplicação.     | 
| [auth-service](./services/auth-service)         | keycloak@19        | Plataforma de Autenticação OAuth/OIDC. |
| [search-service](./services/search-service)     | meilisearch@v0.29 | Motor de indexação e busca.            |

### Projetos Anteriores

- Horário IFRO Ji-Paraná - <https://github.com/horarios-ifro/>

## Licensa

- Entre em contato comigo em `gabrielrodantunes` `[arroba]` `gmail.com`.
