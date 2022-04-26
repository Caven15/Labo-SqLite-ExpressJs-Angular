let connection = require("./dbConnect").get()

// POST /utilisateurs
exports.register = (nom, prenom, email, dateNaissance, isAdmin, password) => {
    return connection.then((connection) => {
        return connection.run(
            `
            INSERT INTO utilisateur (nom, prenom, email, dateNaissance, isAdmin, password)
            VALUES (?,?,?,?,?,?)
            `, 
            nom, prenom, email, dateNaissance, isAdmin, password
        )
    })
}

// POST /utilisateurs
exports.login = (email, password) => {
    return connection.then((connection) => {
        return connection.get(
            `
            SELECT * 
            FROM utilisateur 
            WHERE email = ? AND password = ?
            `, 
            email, password
        )
    })
}