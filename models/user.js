const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    solde: {
        type: Number,
        required: true,
    },

    admin: {
        type: Boolean,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
    return token;
};

const User = mongoose.model("user", userSchema);

const validate = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        solde: Joi.number().min(0),
        admin: Joi.boolean().required() ,
        active: Joi.boolean().required() ,

    });
    return schema.validate(user);
};

module.exports = { User, validate };