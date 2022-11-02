
setup-env:
	docker network create horario-estudantil-net

service-auth-start:
	docker run --rm \
		-p 8080:8080 \
		--env-file auth-service/.env \
		--network horario-estudantil-net \
		--name horario-estudantil-auth \
		-it quay.io/keycloak/keycloak:20.0 start-dev

service-database-start:
	docker run --rm \
	  -p 5432:5432 \
		--name horario-estudantil-db \
		--network horario-estudantil-net \
		--env-file database-service/.env \
    -v '$(shell pwd)/database-service/volumes/postgres:/var/lib/postgresql/data' \
		-it postgres:15-alpine
 