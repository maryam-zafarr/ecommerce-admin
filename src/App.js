import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import Orders from "./pages/Orders";
import Login from "./components/Auth/Login";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <PrivateRoute path="/" exact>
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/dashboard" exact>
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/products" exact>
        <Products />
      </PrivateRoute>
      <PrivateRoute path="/products/new">
        <NewProduct />
      </PrivateRoute>
      <PrivateRoute path="/orders">
        <Orders />
      </PrivateRoute>
    </Switch>
  );
};

export default App;
