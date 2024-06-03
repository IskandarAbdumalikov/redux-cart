import React from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import CartWrapper from "../../components/cart-wrapper/CartWrapper";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);
  console.log(cartData);
  return (
    <div>
      {cartData.length ? (
        <CartWrapper data={cartData} />
      ) : (
        <Empty
          title="Savatchangiz bo'sh"
          url={
            "https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
          }
        />
      )}
    </div>
  );
};

export default Cart;
