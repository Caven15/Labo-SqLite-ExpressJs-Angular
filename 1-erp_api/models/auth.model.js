let connection = require("./dbConnect").get()
var bcrypt = require('bcryptjs')

// POST /utilisateurs
exports.register = (nom, prenom, email, dateNaissance, password) => {
    return connection.then((connection) => {
        return connection.run(
            `
            INSERT INTO utilisateur (nom, prenom, email, dateNaissance, isAdmin, password)
            VALUES (?,?,?,?,0,?)
            `, 
            nom, prenom, email, dateNaissance, password
        )
    })
}

// POST /utilisateurs
exports.login = (email) => {
    return connection.then((connection) => {
        return connection.get(
            `
            SELECT * 
            FROM utilisateur 
            WHERE email = ?
            `, 
            email
        )
    })
}