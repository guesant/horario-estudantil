start-shell:
	make setup-infrastructure;

	docker run --rm \
		-u node \
		-w /app \
		-v $(shell pwd):/app \
		--network horario-estudantil-net \
		-it node:16 bash

start-shell-server:

	make setup-infrastructure;

	docker run --rm \
		-u node \
		-p 3001:3001 \
		-v $(shell pwd):/app \
		--name horario-estudantil-server \
		-w /app/horario-estudantil-server \
		--network horario-estudantil-net \
		--env-file horario-estudantil-server/.env \
		-it he-local-node bash

start-shell-ui:

	make setup-infrastructure;

	docker run --rm \
		-u node \
		-p 3000:3000 \
		-v $(shell pwd):/app \
		--name horario-estudantil-ui \
		-w /app/horario-estudantil-ui \
		--network horario-estudantil-net \
		--env-file horario-estudantil-ui/.env \
		-it he-local-node bash