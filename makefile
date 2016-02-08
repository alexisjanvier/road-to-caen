.PHONY: default install run test build clean-build

default: run-dev

install:
	@npm install

clean-build:
	@rm -rf ./build/*

build: clean-build
	@NODE_ENV=prod ./node_modules/.bin/webpack -p --progress

run-dev: clean-build
	@NODE_ENV=dev ./node_modules/.bin/webpack-dev-server --hot --inline --port=8080

test: clean-build test-unit

test-unit:
	@NODE_ENV=test node_modules/.bin/mocha src/js/**/*.spec.js --compilers js:babel-core/register --reporter spec --ui bdd --timeout 5000
