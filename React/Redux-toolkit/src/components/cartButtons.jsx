import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { increment, decrement } from "../redux/cart";
import {useMemo} from 'react';
export const CartButtons = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const cartList = useSelector((state) => state.cart.cartList);

  const dispatch = useDispatch();
  let currentCartCount = 0;

  const currentProduct = useMemo(() => {
    return cartList?.find((item) => item?.id === product?.id);
  }, [cartList]);

  if (currentProduct) {
    currentCartCount = currentProduct.count;
  }
  console.log("curr cart count", currentCartCount);

  function cartIncrement() {
    dispatch(increment(product));
  }
  function cartDecrement() {
    dispatch(decrement(product));
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <Button
          variant="primary"
          onClick={() => {
            cartIncrement();
          }}
        >
          +{" "}
        </Button>
        {currentCartCount}
        <Button
          variant="secondary"
          onClick={() => {
            cartDecrement();
          }}
        >
          {" "}
          -
        </Button>
      </div>
    </>
  );
};
