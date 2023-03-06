const { User } = require('../models');

const userInfo = [
  {
    "username": "Elon Musk",
    "email": "example@gmail.com",
    "password": "password123"
  },
  {
    "username": "mvp",
    "email": "mvp@gmail.com",
    "password": "ilikeice8002"
  },
  {
    "username": "Uther",
    "email": "lightbringer@storm.com",
    "password": "dontdisthelight2002"
  },
  {
    "username": "mega",
    "email": "mind@metro.com",
    "password": "Presentation!"
  },
  {
    "username": "Rosh",
    "email": "WOD@okay.com",
    "password": "WOD>BFA+SL"
  }
];

const seedUsers = () => User.bulkCreate(userInfo, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;




