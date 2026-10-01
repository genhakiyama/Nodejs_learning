const http = require('http')
const members = [];
const server = http.createServer((req , res) => { // each time reset request, if members inside the function -> it will be reset
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type' , 'text/html');
        res.write('<html>');
            res.write('<head><tittle>Assignment</tittle></head>');
            res.write('<body> <form action = "/create-user" method = "POST"> <input type = "text" name = "username"> <button type = "submit"> Send </button></form> </body>');
        res.write('</html>');
        return res.end()
    }
    
    if (url === '/create-user'){
        const body = []
        req.on('data' , chunk =>{
            body.push(chunk);
        });
        req.on('end' , ()=>{
            
            const parsedBody = Buffer.concat(body).toString();
            members.push(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
    }
    if (url === '/users'){
        res.setHeader('Content-Type' ,'text/html');
        res.write('<html>');
            res.write('<head><title>Assignment 1</title></head>');
            res.write('<body>');
                res.write('<ul>');
                    for(const user of members) {
                        res.write("<li>" + user + "</li>");
                    }
                res.write('</ul>');
            res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    
});

server.listen(3000);