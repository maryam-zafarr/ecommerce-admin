import React from "react";
import Navigation from "../components/Layout/Navigation";
import ProductForm from "../components/Products/ProductForm";
import Main from "../components/UI/Main";

const NewProduct = () => {
  return (
    <div>
      <Navigation />
      <Main>
        <h3>Add Product</h3>
        <ProductForm />
      </Main>
    </div>
  );
};

export default NewProduct;
