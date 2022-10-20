//<------------------------ Imports ------------------------->

const Movie = require("./movieTable")

//<------------------------ Create Function ------------------------->

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)  
    }
    catch (error) {
        console.log(error)
    }
}

//<------------------------ Read Function ------------------------->

exports.readMovie = async (filterObject) => {
    try {
        if (filterObject) {
            return await Movie.findOne({where: filterObject})
        }
        else {
            return await Movie.findAll()
        }
    }
    catch (error) {
        console.log(error)
    }
}

//<------------------------ Update Function ------------------------->

exports.updateMovie = async (movieObject, filterObject) => {
    try {
        await Movie.update(movieObject, {where: filterObject})
    }
    catch (error) {
        console.log(error)
    }
}

//<------------------------ Delete Function ------------------------->

exports.deleteMovie = async (filterObject) => {
    try {
        await Movie.destroy({where: filterObject})
    }
    catch (error) {
        console.log(error)
    }
}