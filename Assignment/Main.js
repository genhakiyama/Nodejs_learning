const http = require('http');
const router = require('./routes');

http.createServer(router).listen(3000);