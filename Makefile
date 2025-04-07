#-------------------------------------------------------------------------------------------------------------------------
# Command line
#-------------------------------------------------------------------------------------------------------------------------

install:
	@echo "Starting install"
	@${compose} up --build -d
	@echo "Let's go ! http://localhost:3000"
.PHONY: install

start:
	@echo "Starting project"
	@${compose} up -d
	@echo "Let's go ! http://localhost:3000"
.PHONY: start

stop:
	@echo "Stopping project"
	@${compose} stop
	@echo "Come back soon if you want to make progress !"
.PHONY: stop

restart: stop start

remove-containers:
	 @${compose} down -v --rmi all --remove-orphans
.PHONY: remove-containers

bash:
	@${exec}
.PHONY: bash

lint:
	@${exec} -c "npm run lint --fix"
.PHONY: lint

format:
	@${exec} -c "npm run format"
.PHONY: format

debug:
	@echo "Debug project"
	@${compose} up
.PHONY: debug

typeorm-sync:
	@${exec} -c "npx ts-node -r tsconfig-paths/register src/sync.ts"
.PHONY: typeorm-sync

typeorm-generate-migration:
	@${exec} -c "npx typeorm migration:generate -d src/data-source.ts src/migrations/AutoMigration"
.PHONY: typeorm-generate-migration

typeorm-run-migrations:
	@${exec} -c "npx typeorm migration:run -d src/data-source.ts"
.PHONY: typeorm-run-migrations

typeorm-revert-migration:
	@${exec} -c "npx typeorm migration:revert -d src/data-source.ts"
.PHONY: typeorm-revert-migration

refresh-db-model: install prisma-generate prisma-push-db prisma-generate-local

#-------------------------------------------------------------------------------------------------------------------------
# Variables
#-------------------------------------------------------------------------------------------------------------------------

compose = docker compose
node_service_name = node_gligue_back
exec = docker exec -it node_gligue_back sh