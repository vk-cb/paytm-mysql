const mysql = require('mysql2')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('paytm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+05:30',  // Setting timezone to IST (UTC+5:30)
    dialectOptions: {
      useUTC: false, // Disable UTC; use the timezone configured above
      dateStrings: true,
      typeCast: true,
    },
  });

  module.exports = sequelize;