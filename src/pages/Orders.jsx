import React from "react";
import Navigation from "../components/Layout/Navigation";
import OrdersList from "../components/Orders/OrdersList";
import Main from "../components/UI/Main";

const Orders = () => {
  return (
    <div>
      <Navigation />
      <Main>
        <h3>Orders</h3>
        <OrdersList />
      </Main>
    </div>
  );
};

export default Orders;
