import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../Redux/cartAction";
import "./Cart.css";

const Cart = () => {
  const state = useSelector((state) => state);
  console.log("state", state);
  const dispatch = useDispatch();
  
  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
        className="green"
      >
        Add Item to Cart
      </button>
      <button
        onClick={() => {
          dispatch(removeItem());
        }}
        className="red"
      >
        Remove Item from Cart
      </button>
    </div>
  );
};

export default Cart;
