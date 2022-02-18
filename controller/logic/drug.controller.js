/** Dto */
const drugDto = require("../../model/dto/drug.dto")
const config = require("config")

/** Entidity operations on data base */
exports.getAll = (req, res, next) => {
    drugDto.getAll({}, (err, data) => {
        if(err) {
            res.status(400).json( {error: err} )
        } else {
            res.status(200).json( {info: data} )
        }
    })
}


exports.createDrug = (req, res, next) => {
    let drug = {
        code: req.body.code,
        name: req.body.name,
        presentation: req.body.presentation,
        units: req.body.units,
        expDate: req.body.expDate,
        laboratory: req.body.laboratory
    }

    drugDto.create(drug, (err, data) => {
        if(err) {
            res.status(400).json( {error: err} )
        } else {
            res.status(200).json( {res: "ok", info: data} )
        }
    })
}