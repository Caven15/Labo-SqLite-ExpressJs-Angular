const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000

// connection a la db
const db = require("./models/dbConnect")
db.connect()    

//routage
const utilisateurRouteur = require('./routers/utilisateur.routeur')
const fournitureRouteur = require('./routers/fourniture.routeur')

app.use(express.json())
app.use(express.urlencoded({extended : true}))

// chargement route utilisateur
app.use("/utilisateur", utilisateurRouteur)
app.use("/fourniture", fournitureRouteur)

// si aucune route n'est trouvée
app.all("*", (request, response, next) => {
    console.log("attention cette route n'existe pas")
    response.end()
})

// choix du port utilisé
app.listen(PORT, console.log(`serveur start sur le port ${PORT}  :-) `))


