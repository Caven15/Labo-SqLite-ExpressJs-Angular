let connection = require("./dbConnect").get()

// GET /fournitures/:id
    exports.getAllById = (id) => {
        return connection.then((connection) => {
            return connection.all(
                `
                SELECT *
                FROM fourniture
                WHERE id_utilisateur = ?
                `,
                id
            )
        })
    }
// POST /fourniture
    exports.add = (nom, quantite, id_utilisateur) => {
        return connection.then((connection) => {
            return connection.run(
                `
                INSERT INTO fourniture (nom, quantite, id_utilisateur)
                VALUES (?,?,?)
                `,
                nom, quantite, id_utilisateur
            )
        })
    }
// PATCH /fourniture/:id
    exports.update = (nom, quantite, id_utilisateur, id) => {
        return connection.then((connection) => {
            return connection.run(
                `
                UPDATE fourniture
                SET nom = ?, quantite = ?, id_utilisateur = ?
                WHERE id = ?
                `,
                nom, quantite, id_utilisateur, id
            )
        })
    }
// DELETE /fourniture/:id
    exports.delete = (id) => {
        return connection.then((connection) => {
            return connection.run(
                `
                    DELETE 
                    FROM fourniture
                    WHERE id = ?
                    `,
                    id
            )
        })
    }
