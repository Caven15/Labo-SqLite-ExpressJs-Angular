const authModel = require("../models/auth.model")
const utilisateurModel = require("../models/utilisateur.model")
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
require('dotenv').config()

exports.testUser = (request, response, next) => {
    // je vérifie si l'adresse email est deja existante
    authModel.login(
        request.body.email,
        request.body.password
    ).then((data) => {
        console.log("----------------------------")
        console.log(data)
        console.log(request.body.email)
        if (data === undefined) {
            console.log("email ok")
            next()
        }
        else{
            response.status(401).json({error: 'adresse mail existante'})
        }
    })
}

exports.verifUpdate = (request, response, next) => {
    console.log("verif update")
    const authHeader = request.headers.authorization
    utilisateurModel.update(
        request.body.nom,
        request.body.prenom,
        request.body.email,
        request.body.dateNaissance,
        request.body.isAdmin,
        bcrypt.hashSync(request.body.password, 10),
        request.params.id
    )
    if (authHeader) {
        const tokenCode = authHeader.split(' ')[1]
        const tokenDecode = jwt.decode(tokenCode, {complete: true})
        // console.log(tokenCode)
        // console.log(tokenDecode)
        // console.log(tokenDecode.payload["isAdmin"])
        // console.log(tokenDecode.payload["id"])
        // console.log(request.params.id)
        if (tokenDecode.payload["isAdmin"] == 1 || tokenDecode.payload["id"] == request.params.id) {
            console.log("je procède a l'update")
            next()
        }
        else{
            console.log("non autorisé")
            response.sendStatus(401).json({error: "vous n'etes pas autoriser a faire ceci"})
        }
    }
    else{
        console.log("token non inseré")
        response.sendStatus(403).json({error: "vous n'avez pas inserer de token"})
    }
}

exports.verifUser = (request, response, next) => {
    
}