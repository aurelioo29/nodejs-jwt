const { type } = require("os");
const { Sequelize } = require("sequelize");

module.exports = (sequileze, Sequelize) => {
  const User = sequileze.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};

