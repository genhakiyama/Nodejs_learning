const express = require('express');
const router = express.Router();

const productControllers = require('../Control/Shop');

router.get('/' , productControllers.getShopProduct);

module.exports = router;