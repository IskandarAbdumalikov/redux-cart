import React from "react";
import "./purchaseInfo.scss";




const PurchaseInfo = ({ handleBuy }) => {
  return (
    <div className="purchase__module">
      <h2>Enter an information</h2>
      <form onSubmit={handleBuy} action="">
        <input required placeholder="Enter a name" type="text" />
        <input required placeholder="Enter a phone number" type="text" />
        <select name="" id="">
          <option value="">Choose region</option>
          <option value="">Tashkent</option>
          <option value="">Samarqand</option>
          <option value="">Jizzax</option>
        </select>
        <button type="submit">Buy</button>
      </form>
    </div>
  );
};

export default PurchaseInfo;
