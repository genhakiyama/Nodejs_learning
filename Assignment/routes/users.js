const members = require('../members.js');

module.exports = (req , res) => {
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
};