
# Introduction
Typescript project with NodeJS + Express + Sequelize ORM.
Node Version: 19.0.0
Npm Version: 8.19.2
Postgres Version: 14

## Installation
Run one of the command below
```bash
npm install
```

## Project Configuration
Project configuration can be found in the .env file
Define your database configuration in the .env file
Sequelize configuration and entities can be found in /Src/sqlz directory.

## Migration
To execute the migration command below
```bash
npm run sqlz:migrate
```

## Run the project
```bash
npm start
```
Your web server is now exposed on http://localhost:3000


## API Documentation 
### GET /api/contacts?name=vishal
```bash
curl --location --request GET 'http://localhost:3000/api/contacts?name=xxx'
```

### POST /api/contacts
```bash
curl --location --request POST 'http://localhost:3000/api/contacts' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "xxx xxxxx",
    "email": "xxx@gmail.com",
    "phone": "xxxxxxxx",
    "address": "xxxxx xxxxx, xxxx",
    "pincode": "xxxxxx",
    "age": 30,
    "gender": "Male",
    "occupation": "Service",
    "other": {
        "hobbies": "Cooking, Chess",
        "interest": "Playing Cricket"
    }
}'
```

## Used Packages 
### body-parser
Parse incoming request bodies in a middleware before your handlers
### cors 
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
### express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
## pg
PostgreSQL interface for Node.js.
## sequelize
Sequelize is an easy-to-use and promise-based Node. js ORM tool for Postgres.
## winston
winston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs
## dotenv
DotEnv is a lightweight npm package that automatically loads environment variables from a . env file into the process. env object
