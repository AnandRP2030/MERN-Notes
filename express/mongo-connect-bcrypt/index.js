const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());
const { userRoutes } = require("./routes/users/users.routes.js");
const { productRoutes } = require("./routes/products/produt.js");
const { connectDb } = require("./connectDb.js");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// middleware
app.use("/user", userRoutes);
app.use("/product", productRoutes);

// connectDb();
// app.listen(port, () => {
//   console.log(`Server started on port: ${port}`);
// });

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
  });
});

// http://localhost:3000/user/get-user
// http://localhost:3000/user/1
// http://localhost:3000/user/login

// http://localhost:3000/product/all-product

const arr = [
  {
    id: 1,
    email: "zzz@gmail.com",
    password: "1234",
    contact: "12341243",
    address: "abc address",
    pincode: "123120",
  },
  {
    id: 2,
    email: "def@gmail.com",
    password: "1234",
    contact: "12341243",
    address: "abc address",
    pincode: "123123",
    state: "kearla",
  },
  {
    id: 3,
    email: "ghi@gmail.com",
    password: "1234",
    contact: "12341243",
    address: "abc address",
    pincode: "123123",
    state: "tamilnadu",
  },
];

app.get("/all-users", (req, res) => {
  return res.status(200).json({ message: "All users", data: arr });
});

app.post("/signup", (req, res) => {
  const {
    username,
    email,
    password,
    contact,
    address,
    pincode,
    state,
    country,
  } = req.body;

  const user = arr.find((user) => user.email === email);

  if (user) {
    return res
      .status(400)
      .json({ message: "User already exists. Please login" });
  }

  const newUser = {
    id: arr.length + 1,
    username,
    email,
    password,
  };
  arr.push(newUser);
  return res
    .status(201)
    .json({ message: "User created successfully", data: newUser });
});
app.get("/users", (req, res) => {
  const { pincode, state, country } = req.query;
  console.log("queries", pincode, state, country);

  if (pincode) {
    const filterByPincodes = arr.filter((user) => user.pincode === pincode);
    const filterByStates = filterByPincodes.filter(
      (user) => user.state === state
    );

    if (filteredUsers.length === 0) {
      return res
        .status(404)
        .json({ message: "No users found with provided pincode" });
    }
    return res
      .status(200)
      .json({ message: "Users found", data: filteredUsers });
  }

  // If no parameters provided, return all users
  return res.status(200).json({ message: "All users", data: arr });
});

//
app.get("/all-users/:prodcutId", (req, res) => {
  try {
    let id = req.params.id;
    id = parseInt(id);
    console.log("id", typeof id, id);
    const user = arr.find((user) => user.id === parseInt(req.params.id));
    console.log("user", user);
    //

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    delete user.password;

    return res.status(200).json({ data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error, please try again later." });
  }
});

// endpoints // routes
app.post("/signup", (req, res) => {
  //destructure
  const { email, password, contact, address } = req.body; // undefined, ""
  if (!email || !password || !contact || !address) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  const isUserAleradyExist = arr.find((user) => user.email === email);

  if (isUserAleradyExist) {
    return res.status(400).json({ message: "Email id already taken" });
  }

  arr.push({ id: arr.length + 1, email, password, contact, address });
  return res.json({ data: arr, message: "Signup Successfully" });
});

