const mysql = require('mysql2')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('paytm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+05:30',  
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
   
  });

  module.exports = sequelize;