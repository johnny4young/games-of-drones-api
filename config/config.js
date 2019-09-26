const fs = require('fs');

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USERNAME || 'postgres',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: +process.env.PORT,
    dialect: 'postgres',
    dialectOptions:{
      ssl : Boolean(process.env.SSL)
    }
  }
};