
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require('../controllers/userController');

router.post('/', userController.addUser) ;


router.get("/me", auth,userController.getme);

module.exports = router;