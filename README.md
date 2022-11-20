# Protótipo "A" do Horário Estudantil.

## Sobre

O horário estudantil surge para manipular e divultar horários de instituições de ensino.

**Breaking changes podem ocorrer neste protótipo sem indicação prévia**.

## Infraestrutura

| Serviço                                                          | Descrição            |
| ---------------------------------------------------------------- | -------------------- |
| [horario-estudantil-ui](./horario-estudantil-ui/)                | Camada de Aplicação. |
| [horario-estudantil-server](./horario-estudantil-server)         | Camada de Servidor.  |
| [horario-estudantil-shared](./horario-estudantil-shared)         | Biblioteca geral.    |
| [horario-estudantil-extractors](./horario-estudantil-extractors) | Extratores de dados. |

| Serviço           | Descrição                              | [SDK](./infrastructure/sdk/) |
| ----------------- | -------------------------------------- | ---------------------------- |
| postgres@15       | Banco de dados geral da aplicação.     | `make start-auth`            |
| keycloak@19       | Plataforma de Autenticação OAuth/OIDC. | `make start-database`        |
| meilisearch@v0.29 | Motor de indexação e busca.            | `make start-meilisearch`     |

### Projetos Anteriores

- Horário IFRO Ji-Paraná - <https://github.com/horarios-ifro/>

## Licensa

- Entre em contato comigo em `gabrielrodantunes` `[arroba]` `gmail.com`.
