import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import "./Header.scss";
// useSelector - input

const Header = () => {
  let wishlistCount = useSelector((state) => state.wishlist.value).length;
  let cartCount = useSelector((state) => state.cart.value).length;
  return (
    <header className="header container">
      <Link className="header__logo" to={"/"}>
        <h2 style={{ color: "blue" }}>RichEcom</h2>
      </Link>
      <form
        className="header__form"
        action="
        "
      >
        <input placeholder="Search" type="text" />
        <select name="" id="">
          <option value="all">All type</option>
        </select>
        <button>
          <IoMdSearch />
        </button>
      </form>
      <div className="header__list">
        <NavLink to={"/"}>
          <button>Home</button>
        </NavLink>
        <NavLink to={"/wishlist"}>
          <button>
            <span>Wishlist</span>
            <sup>{wishlistCount}</sup>
          </button>
        </NavLink>
        <NavLink to={"/cart"}>
          <button>
            <span>My cart</span>
            <sup>{cartCount}</sup>
          </button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
