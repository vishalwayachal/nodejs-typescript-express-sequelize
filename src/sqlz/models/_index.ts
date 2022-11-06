import { Sequelize, Dialect, Model } from 'sequelize'
require('dotenv').config()
const dbConfig = require('../config/config')
const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig
)
export default sequelize
