import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/new">
        <NewProduct />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
    </Switch>
  );
};

export default App;
