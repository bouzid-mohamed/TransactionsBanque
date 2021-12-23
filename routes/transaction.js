const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const transactionController = require('../controllers/transactionController');
router.post('/', transactionController.addTransaction);
router.get('/', transactionController.alltransaction);
module.exports = router;