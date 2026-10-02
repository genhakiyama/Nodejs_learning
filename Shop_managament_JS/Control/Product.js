const Products = require('../Module/Product');

exports.getAddProduct  = (req , res , next) => {
    res.render('add-product' , {pageTittle : 'ADD PRODUCT' , path : '/add-product'});
};

exports.postProduct = (req , res , next) => {
    const product = new Products(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getShopProduct = (req , res , next) => {
    Products.fetchAll(list_products => {
        res.render('shop' , {prods : list_products , pageTittle : 'Shop' , path : '/' });
    });
};