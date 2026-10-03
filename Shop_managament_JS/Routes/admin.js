const express = require('express');
const router = express.Router();

const productControllers = require('../Control/Admin');

router.get('/add-product' , productControllers.getAddProduct);
router.post('/product' , productControllers.postProduct);

router.get('/ShopKeeper' , productControllers.AdjustProductDetail);
router.get('/product/:productID' , productControllers.getProduct);

module.exports = router;
