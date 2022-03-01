.PHONY: install test banner lint_staged

install:
	@yarn
	@poetry install
	@poetry run install
	@mjw hook --install
	@$(MAKE) banner

test:
	@mjw test

lint_staged:
	@npx --no-install lint-staged

banner:
	@echo
	@echo ' __________________________________ '
	@echo ' |                                | '
	@echo ' |   __  __      ___          __  | '
	@echo ' |  |  \/  |    | \ \        / /  | '
	@echo ' |  | \  / |    | |\ \  /\  / /   | '
	@echo ' |  | |\/| |_   | | \ \/  \/ /    | '
	@echo ' |  | |  | | |__| |  \  /\  /     | '
	@echo ' |  |_|  |_|\____/    \/  \/      | '
	@echo ' |                                | '
	@echo ' |________________________________| '
	@echo
