/** Packages */
const mongoose = require("mongoose")

/** Schema creation */
const drugSchema = new mongoose.Schema({
    code: {
        type: "String",
        required: true,
        unique: true
    },
    name: {
        type: "String",
        required: true,
    },
    presentation: {
        type: "String",
        required: true
    },
    units: {
        type: "String",
        required: true
    },
    expDate: {
        type: "String",
        required: true
    },
    laboratoty: {
        type: "String",
        required: true
    }
})

/** Schema exportation */
module.exports = drugSchema