import React from "react";
import Navigation from "../components/Layout/Navigation";
import Header from "../components/Products/Header";
import ProductList from "../components/Products/ProductList";
import Main from "../components/UI/Main";

const Products = () => {
  return (
    <div>
      <Navigation />
      <Main>
        <Header />
        <ProductList />
      </Main>
    </div>
  );
};

export default Products;
