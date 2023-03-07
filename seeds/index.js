const sequelize = require('../config/connection');
const seedUsers = require('./user');
const seedAccounts = require('./account');
const seedWorkouts = require('./workout');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedWorkouts();
  await seedAccounts();

  process.exit(0);
};

seedAll();