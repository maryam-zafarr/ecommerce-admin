import React, { useEffect, useState } from "react";
import { getOrders } from "../../api";
import OrderItem from "./OrderItem";
import classes from "./OrdersList.module.css";

const OrdersList = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <div className={classes.listHeader}>
        {[
          "ORDER ID",
          "USER ID",
          "AMOUNT",
          "ADDRESS",
          "ORDER DATE",
          "PRODUCTS",
        ].map((num) => {
          return (
            <div className={classes.item} key={Math.random()}>
              <p>{num}</p>
            </div>
          );
        })}
      </div>

      <div className={classes.orderList}>
        {orders &&
          orders.map((order) => {
            return <OrderItem key={order._id} item={order} />;
          })}
      </div>
    </div>
  );
};

export default OrdersList;
