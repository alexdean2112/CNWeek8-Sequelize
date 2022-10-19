const yargs = require("yargs")
const {sequelize} = require("./db/connection")
const {createMovie, readMovie, updateMovie, deleteMovie} = require("./movie/movieFunctions")


const app = async (yargsObject) => {
    try {
        await sequelize.sync()
        if (yargsObject.create) {
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
        else if (yargsObject.read) {
            let output = {}
            let table = await readMovie({ [yargsObject.key] : yargsObject.value})
                output.id = table.id
                output.title = table.title
                output.actor = table.actor
                output.director = table.director
                console.log(output)
        }
        else if (yargsObject.readAll) {
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
        else if (yargsObject.update) {
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
        else if (yargsObject.delete) {
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