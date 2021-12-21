const mongoose = require('mongoose');

const compteSchema = new mongoose.Schema({
    
  
    firstName: {
        type: String ,
        required: true
    },
    lastName: {
        type: String ,
        required: true,
      
    },
    email: {
        type: String ,
        required: true
    },
    rib: {
        type: Number ,
        required: true
    },
    password: {
        type: String ,
        required: true
    },
    solde: {
        type: Number,
        required: true ,
       
    },

})

module.exports = mongoose.model('compte',compteSchema)