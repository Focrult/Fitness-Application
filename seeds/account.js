const { Account } = require("../models");

const accountInfo = [
  {
    accountname: "Elon Musk",
    email: "example@gmail.com",
    password: "password123",
  },
  {
    accountname: "mvp",
    email: "mvp@gmail.com",
    password: "ilikeice8002",
  },
  {
    accountname: "Uther",
    email: "lightbringer@storm.com",
    password: "dontdisthelight2002",
  },
  {
    accountname: "mega",
    email: "mind@metro.com",
    password: "Presentation!",
  },
  {
    accountname: "Rosh",
    email: "WOD@okay.com",
    password: "WOD>BFA+SL",
  },
];

const seedAccounts = () =>
  account.bulkCreate(accountInfo, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedAccounts;
