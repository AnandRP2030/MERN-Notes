import products from "../api/products.json";
import { Card, Button } from "react-bootstrap";
const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className="d-flex gap-3 justify-content-between p-5">
        {products.map((product) => {
          console.log("pro", product);
          return (
            <Card style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Title>{product.price}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Button variant="primary">+ </Button>
                  <Button variant="secondary">-</Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
