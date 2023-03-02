const { User } = require('../models');

const userInfo = [ //instead of json, try?
    {
      "username": "Elon Musk",
      "password": "password123"
    },
    {
      "username": "Aedan",
      "password": "ilikeice8002"
    },
    {
      "username": "Uther",
      "password": "dontdisthelight2002"
    },
    {
      "username": "mega",
      "password": "Presentation!"
    },
    {
      "username": "Rosh",
      "password": "WOD>BFA+SL"
    }
  ];

  const seedUsers = () => User.bulkCreate(userInfo);
  module.exports = seedUsers;




