const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Server');
});

server.listen(3001, () => console.log('Server started on port 3000'));
