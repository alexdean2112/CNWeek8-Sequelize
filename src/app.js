const yargs = require("yargs")
const {sequelize} = require("./db/connection")
const {createMovie, readMovie, updateMovie, deleteMovie} = require("./movie/movieFunctions")
const {createUser, readUser, updateUser, deleteUser} = require("./users/userFunctions")
const {favMovie, searchMovies, searchUsers} = require("./queries/queries")


const app = async (yargsObject) => {
    // Functions for interacting with the movie table
    try {
        await sequelize.sync()
        if (yargsObject.createMovie) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director, user: parseInt(yargsObject.user)})
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                output.director = movie.director
                output.user = movie.user
                console.log(output)
            }
        }
        else if (yargsObject.readMovie) {
            let output = {}
            let table = await readMovie({ [yargsObject.key] : yargsObject.value})
                output.id = table.id
                output.title = table.title
                output.actor = table.actor
                output.director = table.director
                output.user = table.user
                console.log(output)
        }
        else if (yargsObject.readAllMovie) {
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                output.director = movie.director
                output.user = movie.user
                console.log(output)
            }
        }
        else if (yargsObject.updateMovie) {
            await updateMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director, user: parseInt(yargsObject.user)}, { [yargsObject.key] : [yargsObject.value] })
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                output.director = movie.director
                output.user = movie.user
                console.log(output)
            }
        }
        else if (yargsObject.deleteMovie) {
            await deleteMovie({ [yargsObject.key] : [yargsObject.value] })
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                output.director = movie.director
                output.user = movie.user
                console.log(output)
            }
        }
            // Functions for interacting with the user table
        if (yargsObject.createUser) {
            await createUser({name: yargsObject.name, membership: yargsObject.membership})
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.membership = user.membership
                console.log(output)
            }
        }
        else if (yargsObject.readUser) {
            let output = {}
            let table = await readUser({ [yargsObject.key] : yargsObject.value})
                output.id = table.id
                output.name = table.name
                output.membership = table.membership
                console.log(output)
        }
        else if (yargsObject.readAllUser) {
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.membership = user.membership
                console.log(output)
            }
        }
        else if (yargsObject.updateUser) {
            await updateUser({name: yargsObject.name, membership: yargsObject.membership}, { [yargsObject.key] : [yargsObject.value] })
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.membership = user.membership
                console.log(output)
            }
        }
        else if (yargsObject.deleteUser) {
            await deleteUser({ [yargsObject.key] : [yargsObject.value] })
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.membership = user.membership
                console.log(output)
            }
        }
        // Queries for the database
        else if (yargsObject.searchMovies) {
            await searchMovies({key: yargsObject.key, value: yargsObject.value})
        }
        else if (yargsObject.searchUsers) {
            await searchUsers({key: yargsObject.key, value: yargsObject.value})
        }
        else if (yargsObject.favMovie) {
            await favMovie({key: yargsObject.key, value: yargsObject.value})
        }
        else {
            console.log("Command not recognised")
        }
        await sequelize.close()
    }
    catch (error) {
        console.log(error)
        await sequelize.close()
    }
}

app(yargs.argv)