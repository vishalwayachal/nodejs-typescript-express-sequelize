
require('dotenv').config()
module.exports = {
    dialect: process.env.DB_DRIVER,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    logging: Boolean(process.env.DB_LOGGING),
    force: Boolean(process.env.DB_FORCE),
    timezone: process.env.DB_TIMEZONE
}