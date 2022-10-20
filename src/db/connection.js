//<------------------------ Imports ------------------------->

require("dotenv").config();
const {Sequelize} = require("sequelize");

//<------------------------ Connection ------------------------->

exports.sequelize = new Sequelize(process.env.MYSQL_URI);