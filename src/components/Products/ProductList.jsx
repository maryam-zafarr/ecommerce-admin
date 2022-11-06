import React, { useEffect, useState } from "react";
import { getProducts } from "../../api";
import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

const ProductList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className={classes.listHeader}>
        {["", "ID", "TITLE", "", "PRICE", "", "IN STOCK"].map((num) => {
          return (
            <div className={classes.item}>
              <p>{num}</p>
            </div>
          );
        })}
      </div>
      <div className={classes.productList}>
        {products &&
          products.map((product) => {
            return <ProductItem key={product._id} item={product} />;
          })}
      </div>
    </div>
  );
};

export default ProductList;
