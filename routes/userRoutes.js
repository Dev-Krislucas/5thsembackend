const { signup, getAllUsers } = require("../controller/usercontroller");

const express = require('express');
const router = express.Router();

router.route('/signup').post(signup);



router.route('/').get(getAllUsers);


module.exports = router;