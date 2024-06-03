import React, { useEffect, useState } from "react";
import axios from "../../api";
import ProductWrapper from "../../components/product-wrapper/ProductWrapper";
import LoadingItem from "../../components/product-wrapper/LoadingItem";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <ProductWrapper data={data} />
      {loading ? <LoadingItem /> : <></>}
    </div>
  );
};

export default Home;
