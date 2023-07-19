import { createAsyncThunk } from "@reduxjs/toolkit";

const DOMAIN = "http://localhost:5000/api";

// GET ALL PRODUCTS
export const getProducts = async () => {
  const response = await fetch(`${DOMAIN}/products`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch products.");
  }
  return data;
};

// ADD PRODUCT
export const addProduct = async (productData) => {
  const response = await fetch(`${DOMAIN}/products`, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch products.");
  }
  return data;
};

// DELETE PRODUCT
export const deleteProduct = async (productId) => {
  const response = await fetch(`${DOMAIN}/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to delete product.");
  }
  return data;
};

// GET ALL ORDERS
export const getOrders = async () => {
  const response = await fetch(`${DOMAIN}/orders`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch orders.");
  }
  return data;
};

// GET MONYHLY INCOME
export const getIncome = async () => {
  const response = await fetch(`${DOMAIN}/orders/income`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch income.");
  }
  return data;
};

// GET ORDER COUNT
export const getOrderCount = async () => {
  const response = await fetch(`${DOMAIN}/orders/count`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch order count.");
  }
  return data;
};

// GET CUSTOMER COUNT
export const getCustomerCount = async () => {
  const response = await fetch(`${DOMAIN}/orders/customers`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch customer count.");
  }
  return data;
};

// GET USER STATS
export const getUserStats = async () => {
  const response = await fetch(`${DOMAIN}/users/stats`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch customer count.");
  }
  return data;
};

// LOGIN USER
export const login = createAsyncThunk("user/loginUser", async (userData) => {
  const response = await fetch(`${DOMAIN}/auth/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok || !data.isAdmin) {
    throw new Error(data.message || "Unable to login.");
  }

  return data;
});
