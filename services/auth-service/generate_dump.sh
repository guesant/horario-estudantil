#!/usr/bin/env bash

set -x

IMG=$(cd image && sudo docker build . -q)

sudo rm -rf dump

sudo docker run --rm \
    -u root \
	  -v $(pwd)/dump/data:/data:rw \
	  -w /opt/keycloak \
	  --network he-net \
	  --env-file .env \
	  --entrypoint /opt/keycloak/bin/kc.sh \
	  -it "${IMG}" export --dir /data --users realm_file --realm horario-estudantil

sudo docker image rm "${IMG}"