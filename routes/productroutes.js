const express = require('express');
const { getAllProducts, createProduct, getSpecificProduct, getProductByCategory } = require('../controller/productController');
const router = express.Router();



router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getSpecificProduct);
router.route("/get/:category").get(getProductByCategory);








module.exports = router;