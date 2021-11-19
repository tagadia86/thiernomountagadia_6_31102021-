const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');


  /*requete POST pour vendre un objet */
  router.post('/',stuffCtrl.createThing );

  //requete get pour 1 élément du tableau***********
  router.get('/:id', stuffCtrl.getOneThing);

  //requete PUT pour 1 élément du tableau (modification)**********
  router.put('/:id', stuffCtrl.modifyThing);

  //requete DELETE pour supprimer un element du tableau**********
  router.delete('/:id', stuffCtrl.deleteThing);

  //requete get pour tous les éléments du tableau
  router.use('/', stuffCtrl.getAllThings);

  module.exports = router;