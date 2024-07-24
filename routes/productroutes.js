const express = require('express');
const { getAllProducts, createProduct, getSpecificProduct } = require('../controller/productController');
const router = express.Router();


router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getSpecificProduct);








module.exports = router;