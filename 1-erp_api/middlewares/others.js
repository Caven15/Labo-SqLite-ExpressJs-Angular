const authModel = require("../models/auth.model")
var bcrypt = require('bcryptjs')

exports.logger = (request, response, next) => {
    authModel.login(
        request.body.email,
        request.body.password
    ).then((data) => {
        if (bcrypt.compareSync(request.body.password, data["password"] )) {
            console.log("connection ok")
            next()
        }
        else{
            response.status(401).json({error: 'mot de passe invalide'})
        }
    })
}

exports.testUser = (request, response, next) => {
    // je vérifie si l'adresse email est deja existante
    console.log("testUser du register")
    next()
}