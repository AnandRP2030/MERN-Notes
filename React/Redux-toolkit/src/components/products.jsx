import products from "../api/products.json";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addToCart, increment, decrement } from "../redux/cart";
import {CartButtons} from "./cartButtons";

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);

  function addToCartFn(product) {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="d-flex gap-3 justify-content-between p-5">
        {products.map((product) => {
          return (
            <Card style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Title>{product.price}</Card.Title>
                  <Button
                    onClick={() => {
                      addToCartFn(product);
                    }}
                  >
                    {" "}
                    Add to cart
                  </Button>
                  <CartButtons product={product}/>
                
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
