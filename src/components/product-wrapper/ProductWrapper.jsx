import React from "react";
import ProductItem from "./ProductItem";
import "./ProductWrapper.scss";

const ProductWrapper = ({ data }) => {
  return (
    <>
      <div className="product__wrapper container">
        {data?.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductWrapper;
