import React, { useEffect, useState } from "react";
import classes from "./Earnings.module.css";
import { getIncome } from "../../api";
import Card from "../UI/Card";

const Earnings = () => {
  const [income, setIncome] = useState();

  useEffect(() => {
    const fetchIncome = async () => {
      const data = await getIncome();
      setIncome(data);
    };
    fetchIncome();
  }, []);

  return (
    <div className={classes.statistics}>
      <Card>
        <h5>Earnings</h5>
        {income && <h3>$ {Math.round(income[0].total)}</h3>}
      </Card>
    </div>
  );
};

export default Earnings;
