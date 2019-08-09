default: start-dev-main

build-dev-main:
	NODE_ENV=development yarn run build:main

start-dev-main: build-dev-main
	NODE_ENV=development yarn run start:main
