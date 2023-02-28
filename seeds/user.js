const { User } = require('../models');

const userInfo = [ //instead of json, try?
    {
    "user_id": 1,
      "username": "Elon Musk",
      "email": "example@gmail.com",
      "password": "password123"
    },
    {
        "user_id": 2,
      "username": "Aedan",
      "email": "mvp@gmail.com",
      "password": "ilikeice8002"
    },
    {
        "user_id": 3,
      "username": "Uther",
      "email": "lightbringer@storm.com",
      "password": "dontdisthelight2002"
    },
    {
        "user_id": 4,
      "username": "mega",
      "email": "mind@metro.com",
      "password": "Presentation!"
    },
    {
        "user_id": 5,
      "username": "Rosh",
      "email": "WOD@okay.com",
      "password": "WOD>BFA+SL"
    }
  ];

  const seedUsers = () => User.bulkCreate(userInfo);
  module.exports = seedUsers;




