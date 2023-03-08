const { User } = require('../models');

const userInfo = [
  {
    "username": "Elon Musk",
    "email": "elon@gmail.com",
    "password": "password123",
    "gender": "male",
    "height": 185,
    "weight": 110,
    // "preference": "swimming, running, weight lifting"
  },
  {
    "username": "Luke Bake",
    "email": "luke@gmail.com",
    "password": "ilikeice8002",
    "gender": "male",
    "height": 178,
    "weight": 100,
    // "preference": "swimming, running, weight lifting"
  },
  {
    "username": "Rachel Barbar",
    "email": "rachel@storm.com",
    "password": "dontdisthelight2002",
    "gender": "female",
    "height": 160,
    "weight": 70,
    // "preference": "swimming, running, weight lifting"
  },
  {
    "username": "Mega Rosh",
    "email": "mega@metro.com",
    "password": "Presentation!",
    "gender": "female",
    "height": 165,
    "weight": 60,
    // "preference": "swimming, running, weight lifting"
  }
];

const seedUsers = () => User.bulkCreate(userInfo, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;




