
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the Node.js HTTP server!');
});

server.listen(3001, () => {
    console.log('HTTP server running on port 3001');
});
