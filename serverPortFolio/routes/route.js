var express = require('express');
// indichiamo la posizione del controller 
var userController = require("../src/user/userController");

//indichiamo i percorsi  di indirizzamento 
const router = express.Router();

router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/createWork').post(userController.createUserWork);
router.route('/user/readAllWork').get(userController.readAllUserWork);
router.route('/user/updateWork').put(userController.updateUserWork);
router.route('/user/deletework').delete(userController.deleteUserWork);

// esportiamo i percorsi
module.exports = router;