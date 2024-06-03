import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slice/wishlistSlice";
import { add } from "../../context/slice/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  return (
    <div className="product__item">
      <Link to={`/single/${product.id}`}>
        <img src={product.images[0]} alt="" />
      </Link>
      <div className="product__item__info">
        <h3>{product.title}</h3>
        <h2>{product.price} $</h2>
        <p>{product.description}</p>
      </div>
      <div className="product__item__btns">
        <button className="like__btn" onClick={() => dispatch(like(product))}>
          {wishlistData.some((el) => el.id === product.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        {cartData.some((el) => el.id === product.id) ? (
          <button
            style={{ background: "green",borderColor:"green" }}
            className="add__cart-btn"
            onClick={() => dispatch(add(product))}
          >
            Added
          </button>
        ) : (
          <button
            className="add__cart-btn"
            onClick={() => dispatch(add(product))}
          >Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
