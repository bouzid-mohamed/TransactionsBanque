
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

class UserController {
    //ajouter un user
    addUser = async (req, res) => {
        try {
            const { error } = validate(req.body);
            if (error) return res.status(400).send(error.details[0].message);

            const user = new User(req.body);

            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            user.password = await bcrypt.hash(user.password, salt);
            await user.save();

            res.send(user);
        } catch (error) {
            console.log(error);
            res.send("An error occured");
        }
    }
    //modifier un user 
    updateUser = async (req, res) => {
        try {
            const { error } = validate(req.body);
            const updateCompte = await User.findByIdAndUpdate(req.params.id, {

                firstName: req.body.firstName,
                lastName: req.body.lastName,
                // password: req.body.password,
                email: req.body.email,
                solde: req.body.solde,
                admin: req.body.admin,
                active: req.body.active
            }, { useFindAndModify: true, new: true })
            res.json({ Compte: updateCompte })

        }
        catch (error) {
            console.log(error);
            res.send("An error occured");
        }
    }



    // get user connecte

    getme = async (req, res) => {
        try {
            const user = await User.findById(req.user._id).select("-password -__v");
            res.send(user);
        } catch (error) {
            console.log(error);
            res.send("An error occured");
        }
    }

    // get un seul compte
    getSingle = async (req, res) => {
        try {
            const findCompte = await User.findById(req.params.id)
            if (findCompte == null) {
                return res.status(404).json({ compte: 'Cant find Compte' })
            }
            res.status(201).json(findCompte)

        } catch (err) {
            res.status(400).json({ compte: err });

        }
    }

        getById = async (iduser) => {
        try {
            const findCompte = await User.findById(iduser)
            if (findCompte == null) {
                return 0
            }
            return findCompte

        } catch (err) {
            return ({ compte: err });

        }
    }

    alluser = async (req, res) => {
        try {
            const comptes = await User.find()
            res.json(comptes)
        } catch (error) {
            res.status(500).json({ comptes: error });
            console.log(error);
        }
    }
}
const usercontroller = new UserController();
module.exports = usercontroller; 