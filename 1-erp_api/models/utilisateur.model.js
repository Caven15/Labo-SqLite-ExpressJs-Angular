let connection = require("./dbConnect").get()

// GET /utilisateurs
    exports.getAll() = () => {
        return connection
            .then((connection) => {
                return connection.all(
                    "SELECT * ",
                    "FROM utilisateur"
                )
            })
    }

// GET /utilisateurs/:id
    exports.getOne() = (id) => {
        return connection
            .then((connection) => {
                return connection.get(
                    "SELECT * ",
                    "FROM utilisateur ",
                    "WHERE id = ?", 
                    id
                )
            })
    }

// POST /utilisateurs
    exports.add() = (nom, prenom, dateNaissance, isAdmin, password) => {
        return connection
            .then((connection) => {
                return connection.run(
                "INSERT INTO utilisateur (nom, prenom, dateNaissance, isAdmin, password) ",
                "VALUES (?,?,?,?,?)", 
                nom, prenom, dateNaissance, isAdmin, password)
            })
    }

// PATCH /utilisateurs/:id
    exports.update() = (nom, prenom, dateNaissance, isAdmin, password, id) => {
        return connection
            .then((connection) => {
                return connection.run(
                    "UPDATE utilisateur",
                    "SET (nom = ?, prenom = ?, dateNaissance = ?, isAdmin = ?, password = ?,)",
                    "WHERE id = ?",
                    nom, prenom, dateNaissance, isAdmin, password, id
                )
            })
    }

// DELETE /utilisateurs/:id
    exports.delete() = (id) => {
        return connection
            .then((connection) => {
                return connection.run(
                    "DELETE FROM utilisateur ",
                    "WHERE id = ?",
                    id
                )
            })
    }