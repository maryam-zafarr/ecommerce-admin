import React from "react";
import Card from "../UI/Card";
import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const date = new Date(props.item.createdAt);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <div className={classes.item}>
      <Card>
        <div className={classes.content}>
          <div className={classes.contentItem}>
            <p>{props.item._id.slice(-7)}</p>
          </div>
          <div className={classes.contentItem}>
            <p>{props.item.userId.slice(-7)}</p>
          </div>
          <div className={classes.contentItem}>
            <p>$ {props.item.amount}</p>
          </div>
          <div className={classes.contentItem}>
            <p>{props.item.address}</p>
          </div>
          <div className={classes.contentItem}>
            <p>{formattedDate}</p>
          </div>
          <div className={classes.contentItem}>
            <p>
              {props.item.products.map((product) => {
                return (
                  <p>
                    Product ID: {product._id.slice(-6)} x ( {product.quantity} )
                  </p>
                );
              })}
            </p>
          </div>
          <input type="checkbox" />
        </div>
      </Card>
    </div>
  );
};

export default OrderItem;
