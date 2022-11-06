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
