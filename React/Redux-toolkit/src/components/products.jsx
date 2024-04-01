import products from "../api/products.json";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addToCart, increment, decrement } from "../redux/cart";

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function addToCartFn(product) {
    dispatch(addToCart(product));
  }
  function cartIncrement(product) {
    dispatch(increment());
  }
  function cartDecrement(product) {
    dispatch(decrement());
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
                {cart.cartCount === 0 ? (
                  <Button
                    onClick={() => {
                      addToCartFn(product);
                    }}
                  >
                    {" "}
                    Add to cart
                  </Button>
                ) : (
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="primary"
                      onClick={() => {
                        cartIncrement(product);
                      }}
                    >
                      +{" "}
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        cartDecrement(product);
                      }}
                    >
                      {" "}
                      -
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
