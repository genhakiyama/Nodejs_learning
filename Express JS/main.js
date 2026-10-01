const express = require('express');
const app = express();

app.use('/users' , (req , res , next) => {
    res.send("Hey, what's up bro");
});

app.use('/' , (req , res , next) => {
    res.send('Netheri I am');
});

app.listen(3000);