const { signup, getAllUsers, addToCart, getCart, login, removeFromCart } = require("../controller/usercontroller");

const express = require('express');
const router = express.Router();

router.route('/signup').post(signup);
router.route("/login").post(login);

router.route('/').get(getAllUsers);

router.route("/addtocart").post(addToCart);
router.route("/removefromcart").post(removeFromCart);
router.route("/:id/getcart").get(getCart);



module.exports = router;