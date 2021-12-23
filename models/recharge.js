const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");
const { number } = require("joi");
Joi.objectId = require('joi-objectid')(Joi) ;


const rechargeSchema = new Schema({
    beneficiary: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    rib: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now() ,
    },
    descriptif: {
        type: String,
        required: true,
    },
    montant: {
        type: Number,
        required: true,
    },
    type:{
        type: Number,
        required: true,
    }


});



const Recharge = mongoose.model("recharge", rechargeSchema);

const validate = (recharge) => {
    const schema = Joi.object({
        beneficiary: Joi.objectId().required(),
        rib: Joi.number().required(),
        descriptif: Joi.string().required(),
        montant: Joi.number().min(10),
        type: Joi.number().required(),
    });
    return schema.validate(recharge);
};

module.exports = { Recharge, validate };