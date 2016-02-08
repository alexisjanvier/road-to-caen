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
