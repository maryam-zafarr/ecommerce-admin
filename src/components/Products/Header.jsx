import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h3>Products</h3>
      <Link to="/products/new" className="btn btn-dark">
        Add Product
      </Link>
    </div>
  );
};

export default Header;
