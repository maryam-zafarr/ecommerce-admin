import React from "react";
import classes from "./Navigation.module.css";
import {
  GridView,
  InventoryOutlined,
  ShoppingCartOutlined,
  TroubleshootOutlined,
  Logout,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <h3>V A N I T Y</h3>
      </div>
      <div className={classes.navItems}>
        <ul>
          <NavLink
            to="/dashboard"
            className={classes.navLink}
            activeClassName={classes.active}
          >
            <GridView />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to="/products"
            className={classes.navLink}
            activeClassName={classes.active}
          >
            <InventoryOutlined />
            <p>Products</p>
          </NavLink>
          <NavLink
            to="/orders"
            className={classes.navLink}
            activeClassName={classes.active}
          >
            <ShoppingCartOutlined />
            <p>Orders</p>
          </NavLink>
          <NavLink
            to="/analytics"
            className={classes.navLink}
            activeClassName={classes.active}
          >
            <TroubleshootOutlined />
            <p>Analytics</p>
          </NavLink>
          <Link to="/login" onClick={onLogout} className={classes.navLink}>
            <Logout />
            <p>Logout</p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
