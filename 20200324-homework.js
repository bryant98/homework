const port=3000;
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Default Page</title></head>');
        res.write('<body><h1>Hello World</h1></body></html>');
        return res.end();    
    }
    if(url === '/test'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>2nd Page</title></head>');
        res.write('<body><h1>Test Now</h1></body></html>');
        return res.end();    
    }
    if(url === '/redirect'){
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(port);
