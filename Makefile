#include .env

.PHONY: help dc-start dc-stop dc-start-local dc-build

help: ## Show this help menu
	@echo "Usage: make [TARGET ...]"
	@echo ""
	@grep --no-filename -E '^[a-zA-Z_%-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "%-15s %s\n", $$1, $$2}'

dcl: ## docker logs
	@docker-compose logs;

dcl5:
	@docker-compose logs | tail -n 5;

dcl10:
	@docker-compose logs | tail -n 10;

dcs: ## Stop docker (might need sudo)
	@docker-compose stop;

dcud: ## dc-stop dc-build ## Start docker (might need sudo)
	@docker-compose up -d;

dc-start-local: ## dc-stop dc-build ## Start docker for local dev (w/o nginx)
	@docker-compose up --scale nginx=0;

dcub:
	@docker-compose up --build;

dcdro:
	@docker-compose down --remove-orphans

dcd:
	@docker-compose down

dcu:
	@docker-compose up
