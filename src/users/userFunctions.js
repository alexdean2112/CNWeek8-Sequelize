//<------------------------ Imports ------------------------->

const User = require("./userTable")

//<------------------------ Create Function ------------------------->

exports.createUser = async (userObject) => {
    try {
        await User.create(userObject)  
    }
    catch (error) {
        console.log(error)
    }
}

//<------------------------ Read Function ------------------------->

exports.readUser = async (filterObject) => {
    try {
        if (filterObject) {
            return await User.findOne({where: filterObject})
        }
        else {
            return await User.findAll()
        }
    }
    catch (error) {
        console.log(error)
    }
}

//<------------------------ Update Function ------------------------->

exports.updateUser = async (userObject, filterObject) => {
    try {
        await User.update(userObject, {where: filterObject})
    }
    catch (error) {
        console.log(error)
    }
}

//<------------------------ Delete Function ------------------------->

exports.deleteUser = async (filterObject) => {
    try {
        await User.destroy({where: filterObject})
    }
    catch (error) {
        console.log(error)
    }
}