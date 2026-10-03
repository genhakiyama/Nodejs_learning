const Products = require('../Module/Product');

exports.getShopProduct = (req , res , next) => {
    Products.fetchAll(list_products => {
        res.render('shop' , {prods : list_products , pageTittle : 'Shop' , path : '/' });
    });
};