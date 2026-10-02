const rootDir = require('../helpers/path');
const path = require('path'); 
const fs = require('fs');

const p = path.join(rootDir , 'data' , 'products.json');

const getProductsFromtTheFile = cb => {
    fs.readFile(p , (err , fileContent) => {
        if (err) return cb([]);
        return cb(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor({title , price , description}) {
        this.title = title;
        this.price = price ;
        this.description = description;
    }

    save() {
        getProductsFromtTheFile(products => {
            products.push(this);
            fs.writeFile(p , JSON.stringify(products) , (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        getProductsFromtTheFile(cb);
    }
};