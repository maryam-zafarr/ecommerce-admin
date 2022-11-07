import React, { useEffect, useState } from "react";
import classes from "./Earnings.module.css";
import Card from "../UI/Card";
import { getCustomerCount } from "../../api";

const Earnings = () => {
  const [customerCount, setCustomerCount] = useState();

  useEffect(() => {
    const fetchCustomerCount = async () => {
      const data = await getCustomerCount();
      setCustomerCount(data);
    };
    fetchCustomerCount();
  }, []);

  return (
    <div className={classes.statistics}>
      <Card>
        <h5>Total Customers</h5>
        {customerCount && <h3>{customerCount}</h3>}
      </Card>
    </div>
  );
};

export default Earnings;
