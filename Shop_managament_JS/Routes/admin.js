const express = require('express');
const app = express();
const path = require('path');
const rootDir = require('../helpers/path');

const router = express.Router();

const products = [];

router.get('/add-product' , (req , res , next) => {
    res.render('add-product' , {pageTittle : 'ADD PRODUCT' , path : '/add-product'});
});

router.post('/product' , (req , res , next) => {
    console.log(req.body.tittle);
    products.push({tittle : req.body.tittle});
    res.redirect('/');
});


exports.routes = router ;
exports.products = products;
