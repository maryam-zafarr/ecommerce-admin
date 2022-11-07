import React from "react";
import classes from "./Navigation.module.css";
import {
  GridView,
  InventoryOutlined,
  ShoppingCartOutlined,
  TroubleshootOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Navigation = () => {
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
          <NavLink
            to="/settings"
            className={classes.navLink}
            activeClassName={classes.active}
          >
            <SettingsOutlined />
            <p>Settings</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
