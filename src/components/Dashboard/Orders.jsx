import React, { useEffect, useState } from "react";
import classes from "./Earnings.module.css";
import Card from "../UI/Card";
import { getOrderCount } from "../../api";

const Orders = () => {
  const [orderCount, setOrderCount] = useState();

  useEffect(() => {
    const fetchIncome = async () => {
      const data = await getOrderCount();
      setOrderCount(data);
    };
    fetchIncome();
  }, []);

  return (
    <div className={classes.statistics}>
      <Card>
        <h5>Total Orders</h5>
        {orderCount && <h3>{orderCount}</h3>}
      </Card>
    </div>
  );
};

export default Orders;
