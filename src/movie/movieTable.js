//<------------------------ Imports ------------------------->

const {DataTypes} = require("sequelize")
const {sequelize} = require("../db/connection")

//<------------------------ Movie table ------------------------->

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

//<------------------------ Exports ------------------------->

module.exports = Movie