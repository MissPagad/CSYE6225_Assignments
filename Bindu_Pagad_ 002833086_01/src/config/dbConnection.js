//require('dotenv').config();
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();
// Access environment variables
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;


async function apiDatabaseConnection() {
  const connectionString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbDatabase}`;
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

export { apiDatabaseConnection };
