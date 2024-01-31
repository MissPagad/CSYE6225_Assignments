import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();

// Access environment variables
const dbHost = process.env.DBAPI_HOST;
const dbPort = process.env.DBAPI_PORT;
const dbUser = process.env.DBAPI_USER;
const dbPassword = process.env.DBAPI_PASSWORD;
const dbDatabase = process.env.DBAPI_DATABASE;


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
