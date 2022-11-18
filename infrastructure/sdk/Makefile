
setup-env:
	docker network create horario-estudantil-net

build-node-pnpm:
	docker build ./docker/node-pnpm -t he-local-node

build-keycloak:
	docker build ./docker/keycloak -t he-local-keycloak

service-auth-start:
	docker run --rm \
		-p 8080:8080 \
		--env-file auth-service/.env \
		--name horario-estudantil-auth \
		--network horario-estudantil-net \
		-it he-local-keycloak start-dev

service-database-start:
	docker run --rm \
	  -p 5432:5432 \
		--name horario-estudantil-db \
		--network horario-estudantil-net \
		--env-file database-service/.env \
    -v '$(shell pwd)/database-service/volumes/postgres:/var/lib/postgresql/data' \
		-it postgres:15-alpine

service-meilisearch-start:
	docker run -it --rm \
    -p 7700:7700 \
		--name horario-estudantil-meilisearch  \
		--network horario-estudantil-net \
		--env-file meilisearch-service/.env \
    -v '$(shell pwd)/meilisearch-service/volumes/meili_data:/meili_data' \
    getmeili/meilisearch:v0.29 \
    meilisearch --env="development"