dev-shell:
	sudo docker run \
		--rm \
		--hostname he-dev-shell \
		-v $(shell pwd):/code \
		-w /code \
		-u node \
		-it node:18 bash