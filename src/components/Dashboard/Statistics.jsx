import React from "react";
import Earnings from "./Earnings";
import Orders from "./Orders";
import Customers from "./Customers";
import classes from "./Statistics.module.css";
import SalesChart from "./SalesChart";

const Statistics = (props) => {
  return (
    <div>
      <div className={classes.statistics}>
        <div className={classes.item}>
          <Earnings />
        </div>
        <div className={classes.item}>
          <Orders />
        </div>
        <div className={classes.item}>
          <Customers />
        </div>
      </div>
      <div className={classes.statistics}>
        <div className={classes.item}>
          <SalesChart />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
