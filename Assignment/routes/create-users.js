const members = require('../members');

module.exports = (req , res) => {
    const body = []
        req.on('data' , chunk =>{
            body.push(chunk);
        });
        req.on('end' , ()=>{
            const parsedBody = Buffer.concat(body).toString();
            members.push(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location' , '/users');
    
    return res.end();
};