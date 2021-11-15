const express = require('express');
const bodyParser = require('body-parser'); //on importe body parser
const mongoose = require('mongoose');//importer mongoose

const sauceModel = require('./models/sauces');//importation du model créé

const app = express();

//connexion à la base de données mongoDB
mongoose.connect('mongodb+srv://thierno_projet_5:passwordprojet6@cluster0.kf6jk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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

  app.use(bodyParser.json()); //app.use parce que ce sera pour toutes les routes de l'appli ==> json est une methode de body parser qui va transformer le corps de la requete en objet js utilisable, à partirde ce middleware on a accés au corps de la requete
  
  /*requete post pour vendre un objet */
  app.post('/api/SAUCES', (req, res, next) => {
    delete req.body._id;
    const newSauce = new sauceModel({
      ...req.body
    });
    newSauce.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

  //requete get pour 1 élément du tableau
  app.get('/api/SAUCES/:id', (req, res, next) => {
    sauceModel.findOne({ _id: req.params.id })
      .then(newSauce => res.status(200).json(newSauce))
      .catch(error => res.status(404).json({ error }));
  });

  //app.get('/api/SAUCES/:_id', (req, res, next) => {
    //sauce_model.findOne({ _id: req.params.id })
    //.then(new_sauce => res.status(200).json(new_sauce))
    //.catch(error => res.status(404).json({ error }));
  //});

  //requete get pour tous les éléments du tableau
  app.use('/api/SAUCES', (req, res, next) => {
    sauceModel.find()
    .then(sauceModels => res.status(200).json(sauceModels)) //le tableau retourné par la base 
    .catch(error => res.status(400).json({ error }));
  });





module.exports = app; //exportation de l'app créé