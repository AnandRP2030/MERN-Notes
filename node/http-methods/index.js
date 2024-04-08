const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the incoming HTTP request
  console.log(`Received ${req.method} request to ${req.url}`);

  // Set the response status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response
  res.end('Hello, World!\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});