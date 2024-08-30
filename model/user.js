const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/databse');
const { timeStamp } = require('console');

const User = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.NUMBER,

}
);



module.exports = User;