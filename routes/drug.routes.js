/** Entidity controller */
const controller = require("../controller/logic/drug.controller")

/** Http verbs for entidity */
module.exports = (app) => {
    app.get("/drug", (req, res, next) => {
        // prueba
        // res.send("Funciona bien")

        controller.getAll(req, res, next)
    })

    app.post("/drug", (req, res, next) => {
        // controller.createDrug(req, res, next)
    })
}