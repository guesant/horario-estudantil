setup:
	(cd ..; make setup)

start:
	make setup;
	sudo docker-compose up -d

stop:
	sudo docker-compose stop

up:
	(cd ../database-service; make start)
	(cd ../search-service; make start)
	(cd ../auth-service; make start)

	make start;

shell:
	make up;

	sudo docker-compose exec endpoint bash

down:
	make stop;

	(cd ../auth-service; make stop)
	(cd ../search-service; make stop)
	(cd ../database-service; make stop)

logs:
	sudo docker-compose logs -f