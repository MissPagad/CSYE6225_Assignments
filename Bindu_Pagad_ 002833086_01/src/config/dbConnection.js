const { Sequelize } = require('sequelize');

async function apiDatabaseConnection() {
  const connectionString = 'postgres://postgres:Pablo@18@localhost:5432/postgres'; // adding my credentials to make connection to db
  const sequelize = new Sequelize(connectionString);
  
try {
   await sequelize.authenticate();
   console.log('Database connection has been connected successfully.');
   return true;
 } catch (error) {
   console.error('Unable to connect to the database:', error);
   return false;
 }
}

module.exports = { apiDatabaseConnection };
