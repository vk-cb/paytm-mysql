const { DataTypes } = require('sequelize');
const sequelize = require('../../config/databse');
const Customer = require('../customer-schema');

const TransactionAmount = sequelize.define('account', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    amount: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false,
    },
});

Customer.hasMany(TransactionAmount, { foreignKey: 'userId' });
TransactionAmount.belongsTo(Customer, { foreignKey: 'userId' });