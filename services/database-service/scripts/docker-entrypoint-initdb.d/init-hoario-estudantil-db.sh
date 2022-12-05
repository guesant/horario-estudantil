#!/bin/bash
set -e

#	CREATE USER docker;
#	CREATE DATABASE docker;
#	GRANT ALL PRIVILEGES ON DATABASE docker TO docker;

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
CREATE SCHEMA IF NOT EXISTS keycloak;
EOSQL