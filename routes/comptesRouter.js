
const express = require('express');
const router = express.Router();
const dabController = require('../controller/dabController');
/* GET home page. */
router.get('/all', dabController.getAll)
router.post('/create', dabController.createCompte)
router.patch('/update/:id',dabController.updateCompte)
router.get('/show/:id',dabController.getSingle)


module.exports = router;