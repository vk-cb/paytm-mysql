const {DataTypes } = require('sequelize');
const sequelize = require('../config/databse');

const User = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
}
);



module.exports = User;