const { Transaction, validate } = require('../models/transaction');

class Transactions {

    // create transaction
    addTransaction = async(req, res) => {
            try {
                const { error } = validate(req.body);
                if (error) return res.status(400).send(error.details[0].message);
                const transaction = new Transaction(req.body);

                await transaction.save();
                res.send(transaction);
            } catch (error) {
                console.log(error);
                res.send("An error occured");
            }
        }
        //get all transaction 

    alltransaction = async(req, res) => {
        try {
            const transactions = await Transaction.find()
            res.json(transactions)
        } catch (error) {
            res.status(500).json({ transactions: error });
            console.log(error);
        }
    }


}

const transactions = new Transactions();
module.exports = transactions;