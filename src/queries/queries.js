const { sequelize } = require("../db/connection");

exports.searchMovies = async (queryObject) => {
    const [result] = await sequelize.query(
        `SELECT Movies.title, Movies.actor, Movies.director FROM Movies WHERE ${queryObject.key} = "${queryObject.value}"`
    );
    console.log(result)
}

exports.searchUsers = async (queryObject) => {
    const [result] = await sequelize.query(
        `SELECT Users.name, Users.membership FROM Users WHERE ${queryObject.key} = "${queryObject.value}"`
    );
    console.log(result)
}

exports.favMovie = async (queryObject) => {
    const [result] = await sequelize.query(
        `SELECT Users.id, Users.name, Movies.title, Movies.actor, Movies.director FROM Movies JOIN Users ON Movies.user = Users.id WHERE Movies.user = ${queryObject.value}`
    );
    console.log(result)
}