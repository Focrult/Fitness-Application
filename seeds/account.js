const { account } = require("../models");

const accountInfo = [
  {
    accountname: "Team Two",
    age: "account age",
    gender: "account gender",
    height: "cm",
    weight: "kg",
    email: "example@gmail.com",
  },
  {
    accountname: "mvp",
    age: "account age",
    gender: "account gender",
    height: "cm",
    weight: "kg",
    email: "mvp@gmail.com",
  },
  {
    accountname: "Uther",
    age: "account age",
    gender: "account gender",
    height: "cm",
    weight: "kg",
    email: "uther@gmail.com",
  },
  {
    accountname: "mega",
    age: "account age",
    gender: "account gender",
    height: "cm",
    weight: "kg",
    email: "mega@gmail.com",
  },
  {
    accountname: "Rosh",
    age: "account age",
    gender: "account gender",
    height: "cm",
    weight: "kg",
    email: "rosh@gmail.com",
  },
];

const seedaccount = () =>
  account.bulkCreate(accountInfo, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedaccount;
