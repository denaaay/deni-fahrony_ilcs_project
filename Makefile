# variables
COMPOSE_FILE = docker-compose.yml

dbup:
	docker-compose -f $(COMPOSE_FILE) up -d --build mysql

backendup:
	docker-compose -f $(COMPOSE_FILE) up -d --build backend

frontendup:
	docker-compose -f $(COMPOSE_FILE) up -d --build frontend

down:
	docker-compose -f $(COMPOSE_FILE) down

createdb:
	docker exec -i mysql_ilcs mysql -u root -prootsecret -e "CREATE DATABASE db_ilcs;"

migrateup:
	docker exec -i mysql_ilcs mysql -u root -prootsecret db_ilcs < ./db/migration/init_db.sql

migratedown:
	docker exec -i mysql_ilcs mysql -u root -prootsecret db_ilcs < ./db/migration/drop_db.sql

.PHONY: dbup backendup frontendup down createdb migrateup migratedown