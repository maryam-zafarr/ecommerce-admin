import React from "react";
import classes from "./ProductItem.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";
import { deleteProduct } from "../../api";

const ProductItem = (props) => {
  const productDeleteHandler = async () => {
    await deleteProduct(props.item._id);
    window.location.reload();
  };

  return (
    <div className={classes.item}>
      <Card>
        <div className={classes.content}>
          <img alt="item" src={props.item.img} />
          <p>{props.item._id.slice(-6)}</p>
          <div className={classes.contentItem}>
            <p>{props.item.title}</p>
          </div>
          <div className={classes.contentItem}>
            <p>$ {props.item.price}</p>
          </div>
          <div className={classes.contentItem}>
            <p>{props.item.inStock.toString()}</p>
          </div>
          <Link
            to={`/products/${props.item._id}/edit`}
            className={classes.link}
          >
            <Edit />
          </Link>
          <button className={classes.button} onClick={productDeleteHandler}>
            <Delete />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ProductItem;
