const authModel = require("../models/auth.model")
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
require('dotenv').config()

exports.logger = (request, response, next) => {
    // je vérifie si mon mort de passe correspond
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

exports.authenticateJWT = (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, user) => {
            if (err) {
                return response.sendStatus(403).json({error: "erreur d'authentification"})
            }
            request.user = user;
            next();
        });
    } 
    else {
        response.sendStatus(401).json({error: "vous n'avez pas inserer de token"})
    }
};