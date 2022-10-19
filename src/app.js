const yargs = require("yargs")
const {sequelize} = require("./db/connection")
const {createMovie, readMovie, updateMovie, deleteMovie} = require("./movie/movieFunctions")
const {createUser, readUser, updateUser, deleteUser} = require("./users/userFunctions")


const app = async (yargsObject) => {
    try {
        await sequelize.sync()
        if (yargsObject.createMovie) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director})
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                output.director = movie.director
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
                console.log(output)
            }
        }
        else if (yargsObject.updateMovie) {
            await updateMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director}, { [yargsObject.key] : [yargsObject.value] })
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                output.director = movie.director
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
                console.log(output)
            }
        }
        if (yargsObject.createUser) {
            await createUser({name: yargsObject.name, role: yargsObject.role})
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.role = user.role
                console.log(output)
            }
        }
        else if (yargsObject.readUser) {
            let output = {}
            let table = await readUser({ [yargsObject.key] : yargsObject.value})
                output.id = table.id
                output.name = table.name
                output.role = table.role
                console.log(output)
        }
        else if (yargsObject.readAllUser) {
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.role = user.role
                console.log(output)
            }
        }
        else if (yargsObject.updateUser) {
            await updateUser({name: yargsObject.name, role: yargsObject.role}, { [yargsObject.key] : [yargsObject.value] })
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.role = user.role
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
                output.role = user.role
                console.log(output)
            }
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