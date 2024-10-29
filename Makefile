# variables
COMPOSE_FILE = docker-compose.yml

dbup:
	docker-compose -f $(COMPOSE_FILE) up -d --build mysql

beup:
	docker-compose -f $(COMPOSE_FILE) up -d --build backend

feup:
	docker-compose -f $(COMPOSE_FILE) up -d --build frontend

down:
	docker exec -i db_ilcs mysql -u root -prootsecret db_ilcs < ./db/migration/drop_db.sql
	docker-compose -f $(COMPOSE_FILE) down

migrateup:
	docker exec -i db_ilcs mysql -u root -prootsecret -e "create database if not exists db_ilcs;"
	docker exec -i db_ilcs mysql -u root -prootsecret db_ilcs < ./db/migration/init_db.sql

migratedown:
	docker exec -i db_ilcs mysql -u root -prootsecret db_ilcs < ./db/migration/drop_db.sql

.PHONY: dbup beup feup down migrateup migratedown