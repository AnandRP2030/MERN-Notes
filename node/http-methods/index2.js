const http = require("http");

const server = http.createServer((req, res) => {
  // Handle the incoming HTTP request
  console.log(`Received ${req.method} request to ${req.url}`);
  // console.log(req);

  // Handle the /profile GET request
  if (req.method === "GET" && req.url === "/profile") {
    // Set the response status code and headers
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    // Send the response as JSON
    res.end(JSON.stringify({ message: "Welcome to your profile!" }));
  } else if (req.method === "GET" && req.url === "/home") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    // Send the response as JSON
    res.end(JSON.stringify({ message: "Welcome to your home" }));
  } else {
    // Set the response status code and headers
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    // Send the response
    res.end("Hello, World!\n");
  }
});

const port = 3005;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
