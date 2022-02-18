/** Entidity controller */
const controller = require("../controller/logic/drug.controller")

/** Http verbs for entidity */
module.exports = (app) => {
    app.get("/drug", (req, res, next) => {
        controller.getAll(req, res, next)
    })

    app.get("/drug/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next);
    });

    app.post("/drug", (req, res, next) => {
        controller.createDrug(req, res, next)
    })

    app.put("/drug", (req, res, next) => {
        controller.updateDrug(req, res, next);
    })

    app.delete("/drug", (req, res, next) => {
        controller.deleteDrug(req, res, next);
    })
}