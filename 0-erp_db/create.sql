CREATE TABLE utilisateur(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    nom VARCHAR NOT NULL,
    prenom VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    dateNaissance DATE NOT NULL,
    isAdmin INTEGER NOT NULL,
    password VARCHAR NOT NULL
)

CREATE TABLE fourniture(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    nom VARCHAR NOT NULL,
    quantite INTEGER NOT NULL,
    id_utilisateur INTEGER NOT NULL,
    FOREIGN KEY(id_utilisateur) REFERENCES utilisateur(id)
);
