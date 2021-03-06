const authModel = require("../models/auth.model")
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
require('dotenv').config()

exports.logger = (request, response, next) => {
    // je vérifie si mon mort de passe correspond
    console.log("je passe dans le logger")
    authModel.login(
        request.body.email,
        request.body.password
    ).then((data) => {
        if (data === undefined) {
            console.log("aucune donnée inserée ")
            response.status(401).json({error: 'veuillez introduire un mot de passe'})
        }
        else if (bcrypt.compareSync(request.body.password, data["password"] )) {
            console.log("connection ok")
            next()
        }
        else{
            console.log("mot de passe invalide")
            response.status(401).json({error: 'mot de passe invalide'})
        }
    })
}

exports.authenticateJWT = (request, response, next) => {
    console.log("je passe dans le authenticateJWT")
    const authHeader = request.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, user) => {
            if (err) {
                // a corriger mon patch ne renvoie pas le token coté front 
                return response.sendStatus(403).json({error: "erreur d'authentification"})
            }
            next();
        });
    } 
    else {
        response.sendStatus(403).json({error: "vous n'avez pas inserer de token"})
    }
}