import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singlePage.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../../context/slice/cartSlice";
import { like } from "../../context/slice/wishlistSlice";

const SinglePage = () => {
  let { id } = useParams();
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(true);
  let [imageOrder, setImageOrder] = useState(0);
  const URL = "https://dummyjson.com/";
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${URL}products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const dispatch = useDispatch();

  const renderImages = () => {
    if (!data || !data.images || data.images.length === 0) {
      return null;
    }
    return data.images.map((image, index) => (
      <div className="single__img" key={index}>
        <img
          className={`${imageOrder === index ? "active__img" : ""}`}
          onClick={() => setImageOrder(index)}
          src={image}
          alt=""
        />
      </div>
    ));
  };

  const singleImages = data.images ? renderImages() : null;

  let singleItem = (
    <div className="single__card">
      <div className="single__card__left">
        {data.images && <img src={data.images[imageOrder]} alt="" />}
        <div className="single__images">{singleImages}</div>
      </div>
      <div className="single__card__right">
        <h2>{data.title}</h2>
        <h3>{data.description}</h3>
        <p>Category : {data.category}</p>
        <p>Brand : {data.brand}</p>
        <p>Price : {data.price}$</p>
        <div className="single__btns">
          <button className="like__btn" onClick={() => dispatch(like(data))}>
            {wishlistData.some((el) => el.id === data.id) ? (
              <FaHeart color="crimson" />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button
            className="add__cart-btn"
            onClick={() => dispatch(add(data))}
          >
            {cartData.some((el) => el.id === data.id)
              ? "Added"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <section
        style={{ paddingTop: "100px" }}
        className="single__item container"
      >
        {loading ? (
          <div className="single__loading">
            <div className="single__loading__img bg__animation"></div>
            <div className="single__loading__info">
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
            </div>
          </div>
        ) : (
          <>{singleItem}</>
        )}
      </section>
    </div>
  );
};

export default SinglePage;
