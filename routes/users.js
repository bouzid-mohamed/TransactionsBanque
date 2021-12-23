const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require('../controllers/userController');
router.post('/', userController.addUser);
router.put('/update/:id', userController.updateUser);
router.get("/:id", userController.getSingle);
router.get("/", userController.alluser);
module.exports = router;