const { Sequelize } = require('sequelize');
const { HealthCheck } = require('../config/dbConnection');

const checkDatabaseConnection = async () => {
    try {
        await Sequelize.authenticate();
        await HealthCheck.create({ status: true });
        return true;
    } catch (error) {
        console.error('Database connection error:', error);
        return false;
    }
};

module.exports = { checkDatabaseConnection };
