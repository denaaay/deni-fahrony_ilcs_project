# variables
COMPOSE_FILE = docker-compose.yml

mysqlup:
	docker-compose -f $(COMPOSE_FILE) up -d --build mysql

backendup:
	docker-compose -f $(COMPOSE_FILE) up -d --build backend

down:
	docker-compose -f $(COMPOSE_FILE) down

createdb:
	docker exec -i mysql_ilcs mysql -u root -prootsecret -e "CREATE DATABASE db_ilcs;"

migrateup:
	docker exec -i mysql_ilcs mysql -u root -prootsecret db_ilcs < ./db/migration/create_tables.sql

migratedown:
	docker exec -i mysql_ilcs mysql -u root -prootsecret db_ilcs < ./db/migration/drop_tables.sql

.PHONY: mysqlup backendup down createdb migrateup migratedown backend