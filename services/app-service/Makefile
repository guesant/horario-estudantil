setup:
	(cd ..; make setup)

start:
	make setup;
	sudo docker-compose up -d

stop:
	sudo docker-compose stop

shell:
	make start;
	sudo docker-compose exec app bash

logs:
	sudo docker-compose logs -f