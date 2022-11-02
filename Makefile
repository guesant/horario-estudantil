start-server-shell:
	docker run --rm \
		-p 3001:3001 \
		-v $(shell pwd):/app \
		-w /app/horario-estudantil-server \
		--env-file horario-estudantil-server/.env \
		--network horario-estudantil-net \
		--name horario-estudantil-server \
		-it node:lts bash