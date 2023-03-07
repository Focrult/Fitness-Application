const { Account } = require("../models");

const accountInfo = [
  {
    accountname: "Tom Team",
    age: "19",
    gender: "male",
    height: "165cm",
    weight: "170kg",
    email: "tom@gmail.com",
    preference: "swimminng, running, lifting",
  },
  {
    accountname: "Luke Bake",
    gender: "male",
    height: "169cm",
    weight: "180kg",
    email: "luke@gmail.com",
    preference: "swimminng, running, lifting",
  },
  {
    accountname: "Rachel Barbar",
    gender: "female",
    height: "150cm",
    weight: "160kg",
    email: "rachel@gmail.com",
    preference: "swimminng, running, lifting",
  },
  {
    accountname: "Mega Rosh",
    gender: "female",
    height: "160cm",
    weight: "155kg",
    email: "mega@gmail.com",
    preference: "swimminng, running, lifting",
  },
  {
    accountname: "John Paul",
    gender: "male",
    height: "170cm",
    weight: "180kg",
    email: "john@gmail.com",
    preference: "swimminng, running, lifting",
  },
];

const seedAccounts = () =>
  Account.bulkCreate(accountInfo, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedAccounts;
