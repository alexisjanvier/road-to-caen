.PHONY: default install run test build clean-build

default: run-dev

install:
	@npm install

clean-build:
	@rm -rf ./build/*

build: clean-build
	@./node_modules/.bin/webpack

run-dev: clean-build
	@./node_modules/.bin/webpack-dev-server --hot --inline --port=8080
