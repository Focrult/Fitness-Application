const { User } = require('../models');

const userInfo = [ //instead of json, try?
    {
      "email": "Elon@123.com",
      "password": "password123"
    },
    {
      "email": "Jeff@yahoo.com",
      "password": "ilikeice8002"
    },
    {
      "email": "rm@gmail.com",
      "password": "showmewhatyougot"
    },
    {
      "email": "megaMind@hotmail.com",
      "password": "Presentation!"
    },
    {
      "email": "Rosh",
      "password": "WOD>BFA+SL"
    }
  ];

  const seedUsers = () => User.bulkCreate(userInfo);
  module.exports = seedUsers;




