const {Recharge,validate} = require('../models/recharge') ;

class Recharges{

        // create Recharge
        addRecharge = async (req, res) => {
            try {
                const { error } = validate(req.body);
                if (error) return res.status(400).send(error.details[0].message);
                const recharge = new Recharge(req.body);
                await recharge.save();
                res.send(recharge);
            } catch (error) {
                console.log(error);
                res.send("An error occured");
            }
        }


}

const recharges = new Recharges() ;
module.exports = recharges; 