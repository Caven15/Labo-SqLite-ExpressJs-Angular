const fournitureModel = require("../models/fourniture.model")

exports.getAllById = (Request, response, next) => {
    fournitureModel.getAllById(Request.params.id).then((data) => {
        response.json(data)
    })
}

exports.add = (request, response, next) => {
    fournitureModel.add(
        request.body.nom,
        request.body.quantite,
        request.body.id_utilisateur
    ).then((datas) => {
        response.json(datas)
    })
}

exports.update = (request, response, next) => {
    fournitureModel.update(
        request.body.nom,
        request.body.quantite,
        request.body.id_utilisateur,
        request.params.id
    ).then((datas) => {
        response.json(datas)
    })
}

exports.delete = (request, response, next) => {
    fournitureModel.delete(
        request.params.id
    ).then((datas) => {
        response.json(datas)
    })
    
}
