const { User } = require('../models');

const userInfo = [ //instead of json, try?
    {
      "username": "Elon Musk",
      "password": "password123"
    },
    {
      "username": "Jeff Bezos",
      "password": "ilikeice8002"
    },
    {
      "username": "RM",
      "password": "showmewhatyougot"
    },
    {
      "username": "megaMind",
      "password": "Presentation!"
    },
    {
      "username": "Rosh",
      "password": "WOD>BFA+SL"
    }
  ];

  const seedUsers = () => User.bulkCreate(userInfo);
  module.exports = seedUsers;




