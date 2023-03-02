const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: config.dbDialect,
});

sequelize.authenticate()
  .then(() => {
    console.log(`Connected to database ${config.dbName}`);
  })
  .catch((err) => {
    console.error(`Database connection error: ${err}`);
  });

module.exports = sequelize;
