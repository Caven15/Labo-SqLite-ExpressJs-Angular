const utilisateurModel = require("../models/auth.model")
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
require('dotenv').config()

function generateAccesToken(utilisateur){
    // je charge un fake token depuis le .env
    // je retourne un token avec les donnée entrée en paramètre avec un paramètre de temps 
    return jwt.sign(utilisateur, process.env.ACCES_TOKEN_SECRET, {expiresIn: '1800s'})
}

exports.register = (request, response, next) => {
    utilisateurModel.register(
        request.body.nom,
        request.body.prenom,
        request.body.email,
        request.body.dateNaissance,
        request.body.isAdmin,
        // hash du mot de passe pour l'envoie ver la db
        bcrypt.hashSync(request.body.password, 10),  
    ).then((datas) => {
        response.json(datas)
    })
}

exports.login = (request, response, next) => {
    // test jwt
        // console.log ("le secret est " + process.env.ACCES_TOKEN_SECRET)
        // let test = generateAccesToken(request.body)
        // console.log(test)

    // je vérifie si le mail n'existe pas déja avant l'inscription ? mise en place middlewhere
    // je vérifie si l'émail existe dans la db
    // je vérifie si le mail et le mot de passe correspond 
    // si tout est ok je renvoi le token problème validités ? 
}