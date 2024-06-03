import React from "react";
import "./ProductWrapper.scss";

const LoadingItem = () => {
  let loadingItem = (
    <div className="loading__card">
      <div className="loading__card__img bg__animation"></div>
      <div className="loading__card__info">
        <div className="loading__card__info__desc bg__animation"></div>
        <div className="loading__card__info__desc bg__animation"></div>
        <div className="loading__card__info__desc bg__animation"></div>
      </div>
    </div>
  );
  return (
    <div className="loading__wrapper container">
      {loadingItem}
      {loadingItem}
      {loadingItem}
      {loadingItem}
      {loadingItem}
      {loadingItem}
      {loadingItem}
      {loadingItem}
      {loadingItem}
      {loadingItem}
    </div>
  );
};

export default LoadingItem;
