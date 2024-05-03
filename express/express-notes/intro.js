const express = require("express");
// First, we import the express package to the express value.
const app = express();
// We instantiate an application by calling the express() method.

app.get("/", (req, res) => res.send("get => Hello World!"));
app.post("/", (req, res) => res.send("post=> Hello World!"));
app.put("/", (req, res) => res.send("put => Hello World!"));
app.patch("/", (req, res) => res.send("patch => Hello World!"));
app.delete("/", (req, res) => res.send("delete => Hello World!"));
// There is a method for every HTTP : get(), post(), put(), delete(), and patch():
// Those methods accept a callback function – which is called when a request is started – and we need to handle it.

// req, res
// Express sends us two objects in this callback, which we called req and res. They represent the
// Request and the Response objects.

// Request is the HTTP request. It gives us all the request information, including the request parameters,
// the headers, the body of the request, and more.

// Response is the HTTP response object that we'll send to the client.

// What we do in this callback is send the 'Hello World!' string to the client, using the 
// Response.send() method.

app.listen(5100, () => console.log("Server ready on http://localhost:5100"));
