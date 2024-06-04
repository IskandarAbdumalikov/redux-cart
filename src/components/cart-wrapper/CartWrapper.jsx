import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  remove,
  removeAll,
} from "../../context/slice/cartSlice";
import "./cartWrapper.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { like } from "../../context/slice/wishlistSlice";
import { Link } from "react-router-dom";
import PurchaseInfo from "../purchaseInfo/PurchaseInfo";

const CartWrapper = ({ data }) => {
  const wishlistData = useSelector((state) => state.wishlist.value);
  let dispatch = useDispatch();
  let [showModule, setShowModule] = useState(false);
  let [value, setValue] = useState("");
  let handleBuy = () => {
    setShowModule(false);
    dispatch(removeAll(data));
    alert("Haridingiz uchun rahmat");
  };

  let handlePurchase = () => {
    setShowModule(true);
  };

  let calculatePrice = () => {
    let total = data?.reduce((sum, item) => sum + item.amount * item.price, 0);
    return total;
  };
  let cartItems = data?.map((el) => (
    <div className="product__cart container" key={el.id}>
      <div className="product__cart__left">
        <Link to={`/single/${el.id}`}>
          <img className="product__cart__left__img" src={el.thumbnail} alt="" />
        </Link>
        <div className="product__cart__left__info">
          <p>{el.title}</p>
          <p>{el.brand}</p>
        </div>
      </div>

      <div style={{ color: "red" }}>
        {el.amount === el.stock ? "Productlar soni tugadi" : ""}
      </div>
      <div className="product__cart__middle">
        <div className="product__cart__btns">
          <button
            className="decrease__btn"
            disabled={el.amount <= 1}
            onClick={() => dispatch(decreaseAmount(el))}
          >
            -
          </button>
          <span>{el.amount}</span>
          <button
            className="increase__btn"
            disabled={el.stock === el.amount}
            onClick={() => dispatch(increaseAmount(el))}
          >
            +
          </button>
        </div>
        <div className="product__cart__prices">
          {el.amount === 1 ? (
            <h3>{el.price} USD / per item</h3>
          ) : (
            <div>
              <h3>Total price : {(el.price * el.amount).toFixed(2)} USD</h3>
              <p>{el.price} USD / per item</p>
            </div>
          )}
        </div>
      </div>
      <div className="product__cart__right">
        <button className="like__btn" onClick={() => dispatch(like(el))}>
          {wishlistData.some((product) => product.id === el.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button className="remove__btn" onClick={() => dispatch(remove(el))}>
          Remove
        </button>
      </div>
    </div>
  ));
  return (
    <div className="cart__section container">
      <div
        style={{ padding: "50px", marginTop: "100px" }}
        className="product__cart__wrapper container"
      >
        <h1>Your shopping cart</h1>
        {cartItems}
      </div>
      <div className="cart__section__right">
        <div className="coupon__card">
          <h2>Have coupon?</h2>
          <form action="">
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Coupon code"
              type="text"
            />
            <button>Apply</button>
          </form>
        </div>
        <div className="purchase__card">
          <div>
            <p>Total price:</p> <span>${(calculatePrice()).toFixed(2)}</span>
          </div>
          <div className="discount">
            <p>Discount:</p> <span>{value === "laylo" ? "-$100" : "-$60"}</span>
          </div>
          <div>
            <p>TAX:</p> <span>$14</span>
          </div>
          <hr />
          <button onClick={handlePurchase} className="purchase__btn">
            Make purchase
          </button>
          <button>Back to shop</button>
        </div>
      </div>
      {showModule ? <PurchaseInfo handleBuy={handleBuy} /> : <></>}
      {showModule ? (
        <div onClick={() => setShowModule(false)} className="overlay"></div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartWrapper;
