const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended : false}))

app.use('/add-product' , (req , res , next) => {
    res.send('<form action = "/product" method = "POST"> <input type = "text" name = "tittle"><button type = "submit"> ADD </button></form>');
});

app.post('/product' , (req , res , next) => {
    fs.writeFileSync('message.txt' , req.body.tittle);
    res.redirect('/');
});

app.use('/' , (req , res , next) => {
    res.send('<h1> Hello , I am Cristiano Ronaldo </h1>');
});

app.listen(3000);