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
    constructor({title , image , price , description}) {
        this.title = title;
        this.image = image;
        this.price = price ;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
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

    static FindbyID(id , cb) {
        getProductsFromtTheFile(products => {
            const product = products.find(p => p.id == id);
            cb(product);
        });
    }
};