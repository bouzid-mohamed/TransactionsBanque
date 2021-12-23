const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const Joi = require("joi");

class AuthController {
    // authentification and get token
    auth = async(req, res) => {

        try {
            const { error } = validate(req.body);
            if (error) return res.status(200).send(error.details[0].message);
            const user = await User.findOne({ email: req.body.email });
            if (!user) return res.status(200).send({ tokens: null, msg: "Invalid email or password" });

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword)
                return res.status(200).send({ tokens: null, msg: "Invalid email or password" });

            const token = user.generateAuthToken();
            res.send({ tokens: token });
        } catch (error) {
            console.log(error);
            res.send("An error occured");
        }
    }


}

// validation des champs

const validate = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    return schema.validate(user);
};

const authcontroller = new AuthController();
module.exports = authcontroller;