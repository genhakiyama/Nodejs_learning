const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./helpers/path');
const app = express();
const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');
const path = require('path');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(rootDir , 'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use('/' , (req , res , next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views' , '404.html'));
});

app.listen(3000);