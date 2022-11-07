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
      token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNjExY2E5NmJkMmYzMTQ0NDY1NGI5YSIsImVtYWlsIjoiZW1tYUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlfSwiaWF0IjoxNjY3MzIwMDI1fQ.IAE7aX5db02VNp_FHY6o6stSc_2-WqijXKdA22oNCXg`,
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
      token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNjExY2E5NmJkMmYzMTQ0NDY1NGI5YSIsImVtYWlsIjoiZW1tYUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlfSwiaWF0IjoxNjY3MzIwMDI1fQ.IAE7aX5db02VNp_FHY6o6stSc_2-WqijXKdA22oNCXg`,
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to delete product.");
  }
  return data;
};
