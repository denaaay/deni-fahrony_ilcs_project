# variables
COMPOSE_FILE = docker-compose.yml

build:
	docker-compose -f $(COMPOSE_FILE) up -d --build

delete:
	docker-compose -f $(COMPOSE_FILE) down

createdb:
	docker exec -i mysql_ilcs mysql -u root -prootsecret -e "CREATE DATABASE db_ilcs;"

migrateup:
	docker exec -i mysql_ilcs mysql -u root -prootsecret db_ilcs < ./db/migration/create_tables.sql

migratedown:
	docker exec -i mysql_ilcs mysql -u root -prootsecret db_ilcs < ./db/migration/drop_tables.sql

.PHONY: build delete createdb migrateup migratedown