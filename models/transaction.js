const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);


const transactionSchema = new Schema({
    debiteur: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    crediteur: {
        type: mongoose.Types.ObjectId,
        default: null
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    descriptif: {
        type: String,
        required: true,
    },
    montant: {
        type: Number,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    }


});



const Transaction = mongoose.model("transaction", transactionSchema);

const validate = (transaction) => {
    const schema = Joi.object({
        debiteur: Joi.objectId().required(),
        //crediteur: Joi.objectId().required(),
        // date: Joi.date().required(),
        descriptif: Joi.string().required(),
        montant: Joi.number().min(10),
        type: Joi.number().required(),
    });
    return schema.validate(transaction);
};

module.exports = { Transaction, validate };