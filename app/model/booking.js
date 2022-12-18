const Sequelize = require("sequelize");
// import { DataTypes } from "sequelize";
const sequelize = require("../util/database");

const Expense = sequelize.define("expense", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  exp: Sequelize.STRING,
  des: {
    type: Sequelize.STRING,
  },
  categ: Sequelize.STRING,
});

module.exports = Expense;
