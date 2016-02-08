.PHONY: default install run test build clean-build

default: run-dev

install:
	@npm install
	@node_modules/.bin/selenium-standalone install --version=2.48.2

clean-build:
	@rm -rf ./build/*

build: clean-build
	@NODE_ENV=prod ./node_modules/.bin/webpack -p --progress

run-dev: clean-build
	@NODE_ENV=dev ./node_modules/.bin/webpack-dev-server --hot --inline --port=8080

test: clean-build test-unit test-functional

test-unit:
	@NODE_ENV=test node_modules/.bin/mocha src/js/**/*.spec.js --compilers js:babel-core/register --reporter spec --ui bdd --timeout 5000

test-functional: clean-build
	@make build
	@node_modules/.bin/pm2 start rtc_functional_tests.json
	@NODE_ENV=test node_modules/.bin/nightwatch
	@node_modules/.bin/pm2 stop rtc-static-server

deploy: build
	@ echo '* Deploy web app on S3 *'
	aws s3 --profile=caen --region=eu-west-1 sync ./build/ s3://road-to-caen.alexisjanvier.net/ --delete
