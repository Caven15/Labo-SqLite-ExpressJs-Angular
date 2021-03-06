const utilisateurModel = require("../models/utilisateur.model")
var bcrypt = require('bcryptjs');

exports.getAll = (request, response, next) => {
    console.log("lancement du get All")
    utilisateurModel.getAll().then((datas) => {
            response.json(datas)
        })
}

exports.getOne = (request, response, next) => {
    utilisateurModel.getOne(request.params.id).then((data) => {
        response.json(data)
    })
}

exports.update = (request, response, next) => {
    utilisateurModel.update(
        request.body.nom,
        request.body.prenom,
        request.body.email,
        request.body.dateNaissance,
        bcrypt.hashSync(request.body.password, 10),
        request.params.id
    ).then((datas) => {
        response.json(datas)
    })
}

exports.delete = (request, response, next) => {
    utilisateurModel.delete(
        request.params.id
    ).then((datas) => {
        console.log("delete Ok")
        response.json(datas)
    })
    
}