const Products = require('../Module/Product');

exports.getAddProduct  = (req , res , next) => {
    res.render('add-product' , {pageTittle : 'ADD PRODUCT' , path : '/add-product'});
};

exports.postProduct = (req , res , next) => {
    const product = new Products({
        title : req.body.title ,
        image : req.body.image, 
        price : req.body.price , 
        description : req.body.description
    });
    product.save();
    res.redirect('/');
};

exports.AdjustProductDetail = (req , res , next) => { 
    Products.fetchAll(products =>{ 
        res.render( 'ShopKeeper' , {prods : products , pageTittle : 'Product' , path : '/ShopKeeper'});
    });
};

exports.EditDetail = (req , res , next) => {

};