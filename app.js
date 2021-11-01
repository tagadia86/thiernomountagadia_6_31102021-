const express = require('express');
const bodyParser = require('body-parser'); //pour extraire l'objet json de la demande POST
const app = express();
const Sauces = require('./models/sauces');//importer le model mongoose

//partie mongoose
const mongoose = require('mongoose');

//parametrage de mongoose pour accéder àla base de données
mongoose.connect('mongodb+srv://thierno_projet_5:ZYiJZiR8WsaR80nY@cluster0.kf6jk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//middleware pour la gestion des CORS: elle sera appliquée à toutes les requetes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //accéder à notre API depuis n'importe quelle origine ( '*' ) ;
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
    next();
  });

//inclusion de body parser avant toutes les requetes
  app.use(bodyParser.json()); //utilisation de body parser pour toutes les routes pour transformer le corps de la requete en objet js utilisable
//création d'une requete POST
app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

module.exports = app; //exportation de l'app créé