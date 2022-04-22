const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000
const db = require("./models/dbConnect")
const utilisateurRouteur = require('./routers/utilisateur.routeur')


// connection a la db
db.connect()    


app.use(express.json())


app.use(express.urlencoded({extended : true}))

// chargement route utilisateur
app.use("/utilisateur", utilisateurRouteur)

// si la route n'est pas trouvée
app	.all("*", (request, response, next) => {
    console.log("attention la route n'existe pas")
    response.end()
})

// choix du port utilisé
app.listen(PORT, console.log(`le serveur a démaré sur le port ${PORT}`))


