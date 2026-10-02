const express = require('express');
const router = express.Router();

const productControllers = require('../Control/Product');

router.get('/add-product' , productControllers.getAddProduct);
router.post('/product' , productControllers.postProduct);

module.exports = router;
