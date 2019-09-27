

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

This proyect was created using Nest, Docker, Sequelize, TypeScript, Jest and Postgres as Database.



Live API Demo [Link](https://games-of-drones-api-now.johnny4young.now.sh/)

## Installation

```bash
$ npm install

```

aditionally you can deployment this API to NOW Platform

```deploy NOW
$ npm install -g now
$ now login
$ npm run build
$ now
```

## Prerequisites

- Node.js
- Docker



## Running the app

```bash

# create a .env file for configuring variables, see .evn.example 

# development
$ npm run start

# run docker container Postgres
$ npm run db:start

# run migrations/seeder, do it only once and after to run 'npm run start'!
$ npm run db:seed

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

You could support this development doing a positive feedback in your company :).


Nest is [MIT licensed](LICENSE).
