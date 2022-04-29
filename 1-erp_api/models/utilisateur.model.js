let connection = require("./dbConnect").get()

// GET /utilisateurs
    exports.getAll = () => {
        return connection.then((connection) => {
            return connection.all(
                `
                SELECT * 
                FROM utilisateur
                `
            )
        })
    }

// GET /utilisateurs/:id
    exports.getOne = (id) => {
        return connection.then((connection) => {
            return connection.get(
                `
                SELECT *
                FROM utilisateur
                WHERE id = ?
                `, 
                id
            )
        })
    }

// PATCH /utilisateurs/:id
    exports.update = (nom, prenom, email,  dateNaissance, password, id) => {
        return connection.then((connection) => {
            return connection.run(
                `
                UPDATE utilisateur
                SET nom = ?, prenom = ?, email = ?, dateNaissance = ?, password = ?
                WHERE id = ?
                `,
                nom, prenom, email, dateNaissance, password, id
            )
        })
    }

// DELETE /utilisateurs/:id
    exports.delete = (id) => {
        return connection.then((connection) => {
            return connection.run(
                `
                DELETE 
                FROM utilisateur
                WHERE id = ?
                `,
                id
            )
        })
    }