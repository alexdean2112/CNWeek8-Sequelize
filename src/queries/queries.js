//<------------------------ Imports ------------------------->

const { sequelize } = require("../db/connection");

//<------------------------ Movie search query ------------------------->

exports.searchMovies = async (queryObject) => {
    const [result] = await sequelize.query(
        `SELECT Movies.title, Movies.actor, Movies.director FROM Movies WHERE ${queryObject.key} = "${queryObject.value}"`
    );
    console.log(result)
}

//<------------------------ User search query ------------------------->

exports.searchUsers = async (queryObject) => {
    const [result] = await sequelize.query(
        `SELECT Users.name, Users.membership FROM Users WHERE ${queryObject.key} = "${queryObject.value}"`
    );
    console.log(result)
}

//<------------------------ Favourite movie search query ------------------------->

exports.favMovie = async (queryObject) => {
    const [result] = await sequelize.query(
        `SELECT Users.id, Users.name, Movies.title, Movies.actor, Movies.director FROM Movies JOIN Users ON Movies.user = Users.id WHERE Movies.user = ${queryObject.value}`
    );
    console.log(result)
}