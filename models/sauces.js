
const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({/*utilisation de la fonction Schema de mongoose auquel on passe un objet*/
    //name: { type: String, required: true },
    //manufacturer: { type: String, required: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: String, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: { type: [String], required: true },
    userDisliked: { type: [String], required: true },

});

//module.exports = mongoose.model('sauce_model', sauceSchema);
module.exports = mongoose.model('sauceModel', sauceSchema);