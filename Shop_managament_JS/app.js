const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./helpers/path');
const path = require('path');

const app = express();
const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

app.set('view engine' , 'pug');
app.set('views' , 'Views');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(rootDir , 'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use('/' , (req , res , next)=>{
    res.status(404).render(path.join(rootDir, 'Views' , '404.pug'));
});

app.listen(3000);