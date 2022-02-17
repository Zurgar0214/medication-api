/** Packages */
const mongoose = require("mongoose")
const config = require("config")

/** Connection strings */
const mongodbInfo = config.get("db-connections.mongodb")
const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`

/** Data base connection and yours events */
module.exports = () => {
    mongoose.connect(connStr)

    mongoose.connection.on("connected", () => {
        console.log(">>> CONECTADO A LA BASE DE DATOS")
    })

    mongoose.connection.on("error", () => {
        console.log(">>> HAY UN ERROR AL CONECTARSE A LA BD")
    })

    mongoose.connection.on("disconnected", () => {
        console.log(">>> BASE DE DATOS DESCONECTADA")
    })

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log(">>> EL SERVIDOR SE ENCUENTRA APAGADO")
        })
    })
}