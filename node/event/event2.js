const http = require('http');
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create a HTTP server
const server = http.createServer((req, res) => {
  // Emit a 'requestReceived' event when a new HTTP request is received
  eventEmitter.emit('requestReceived', req);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// Register an event handler for the 'requestReceived' event
eventEmitter.on('requestReceived', (req) => {
  console.log(`Received a ${req.method} request for ${req.url}`);
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
