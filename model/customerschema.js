const {DataTypes} = require('sequelize')
const sequelize = require('../config/databse')

const customerSchema = sequelize.define('customers', {
    name : DataTypes.STRING,
    email : {
        type : DataTypes.STRING,
                unique : true,
                validate : {
                    isEmail : true
                }
    },
    password : DataTypes.STRING,
    isActive : {type: DataTypes.BOOLEAN,
        defaultValue: true,}

},
{
    tableName: 'Customers', // Ensure the table name matches the one in your query
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  })

module.exports = customerSchema;
