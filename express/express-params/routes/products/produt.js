const express = require("express");
const productRoutes = express.Router();

const productDb = [
  {
    id: 1,
    name: "iphone",
    price: 1000,
  },
  {
    id: 2,
    name: "samsung",
    price: 2000,
  },
  {
    id: 3,
    name: "nokia",
    price: 3000,
  },
];

productRoutes.get("/all-product", (req, res) => {
  try {
    res.status(200).json({ message: "All products ", data: productDb });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = {productRoutes}