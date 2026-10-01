const home = require('./home');
const users = require('./users');
const createUser = require('./create-users');

const routes = [
    {method : 'GET' , url : '/' , handler : home} , 
    {method : 'GET' , url : '/users' , handler : users} , 
    {method : 'POST' , url : '/create-users' , handler : createUser}
];

module.exports = (req , res) => {
    const router = routes.find(r => r.method === req.method && r.url === req.url);

    if (router) return router.handler(req , res);
    res.status_code = 404; // Not Found
    res.end("Not Found");
}