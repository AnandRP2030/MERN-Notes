const express = require("express");
const app = express();

let count = 0;
const countTotalReqs = (req, res, next) => {
  count++;
  console.log("reqs", count);
  next();
};

const timeCalculation = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const end = Date.now();
    const duration = end - start;
    console.log("duration", duration);
  });
  next();
};

// if you use app.use() after this middleware countTotalReqs call first
app.use(countTotalReqs);
app.use(timeCalculation);

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/login", (req, res) => {
  // passing data throw query
  const username = req.query.username;
  const password = req.query.password;
  const headers = req.headers;
  // headers
  const authId = req.headers.auth;
  console.log(authId);
  if (username !== "admin" && password !== "1234") {
    return res.status(401).json({ msg: "username or password is invalid" });
  }

  return res.status(200).json({ msg: "login success" });
});

// these are  middlewares
const cb1 = (req, res, next) => {
  const { id } = req.query;
  console.log("id ", id, typeof id);
  if (id != 1) {
    return res.status(400).json({ msg: "id is not valid" });
  }
  console.log("cb1 passed");
  next();
};
const cb2 = (req, res, next) => {
  const token = req.headers.token;
  if (!(token === "1234")) {
    return res.status(400).json({ msg: "Token is not valid" });
  }

  console.log("cb2 passed", token, "token is correct");
  next();
};

app.get("/middlewares", cb1, cb2, (req, res) => {
  res.send("All middlewars are passed");
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Error on server")
  }
  console.log("listening on port 3000");
});
