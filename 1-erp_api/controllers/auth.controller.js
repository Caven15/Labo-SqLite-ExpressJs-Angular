const authModel = require("../models/auth.model")
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
let connection = require("../models/dbConnect").get()
require('dotenv').config()

function generateAccesToken(utilisateur){
    // je charge un fake token depuis le .env
    // je retourne un token avec les donnée entrée en paramètre avec un paramètre de temps 
    return jwt.sign(utilisateur, process.env.ACCES_TOKEN_SECRET, {expiresIn: '1800s'})
}

exports.register = (request, response, next) => {
    authModel.register(
        request.body.nom,
        request.body.prenom,
        request.body.email,
        request.body.dateNaissance,
        // hash du mot de passe pour l'envoie ver la db
        bcrypt.hashSync(request.body.password, 10),  
    ).then((datas) => {
        response.json(datas)
    })
}

exports.login = (request, response, next) => {
    authModel.login(
        request.body.email,
        request.body.password
    ).then((data) => {
        // test jwt
        // console.log ("le secret est " + process.env.ACCES_TOKEN_SECRET)
        // let test = generateAccesToken(request.body)
        // console.log(test)
        // si tout est ok je renvoi le token 
        const dataToken = {
            id : data.id,
            nom : data.nom,
            prenom : data.prenom,
            email : data.email,
            dateNaissance : data.dateNaissance,
            isAdmin : data.isAdmin
        }
        const token = generateAccesToken(dataToken)
        response.json(token)
    })
    
}