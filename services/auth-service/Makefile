generate_dump:
	./generate_dump.sh

sync_dump:
	make generate_dump
	cp dump/data/* -r image/data/import
	sudo docker-compose build

setup:
	(cd ..; make setup)

start:
	make setup;
	sudo docker-compose up -d

stop:
	sudo docker-compose stop

logs:
	sudo docker-compose logs -f