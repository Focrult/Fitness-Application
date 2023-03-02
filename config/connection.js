const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;


// const { Sequelize } = require('sequelize');
// const config = require('./config');

// const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
//   host: config.dbHost,
//   dialect: config.dbDialect,
// });

// sequelize.authenticate()
//   .then(() => {
//     console.log(`Connected to database ${config.dbName}`);
//   })
//   .catch((err) => {
//     console.error(`Database connection error: ${err}`);
//   });

// module.exports = sequelize;
