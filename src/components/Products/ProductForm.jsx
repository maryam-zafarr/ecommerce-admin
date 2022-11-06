import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../api";
import classes from "./ProductForm.module.css";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.desc) {
    errors.desc = "Required";
  }

  if (!values.img) {
    errors.img = "Required";
  }

  if (!values.price) {
    errors.price = "Required";
  }

  return errors;
};

const ProductForm = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      price: 0,
      img: "",
      categories: "",
      size: "",
      color: "",
    },
    validate,
    onSubmit: async (values) => {
      const categories = values.categories.split(",");
      const size = values.size.split(",");
      const color = values.color.split(",");
      const price = Number(values.price);
      const productData = { ...values, categories, size, color, price };
      try {
        await addProduct(productData);
        history.push("/products");
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className={classes.form}>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.authFormContent}>
          <div className="form-group mt-3">
            <input
              id="title"
              name="title"
              placeholder="Title"
              className="form-control mt-1"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <textarea
              id="desc"
              name="desc"
              placeholder="Description"
              className="form-control mt-1"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desc}
            />
            {formik.touched.desc && formik.errors.desc ? (
              <div>{formik.errors.desc}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <input
              id="img"
              name="img"
              placeholder="Image URL"
              className="form-control mt-1"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.img}
            />
            {formik.touched.img && formik.errors.img ? (
              <div>{formik.errors.img}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <input
              id="price"
              name="price"
              placeholder="Price"
              className="form-control mt-1"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <input
              id="categories"
              name="categories"
              placeholder="Categories (men, winter, etc)"
              className="form-control mt-1"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categories}
            />
            {formik.touched.categories && formik.errors.categories ? (
              <div>{formik.errors.categories}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <input
              id="size"
              name="size"
              placeholder="Sizes (XS, S, M, L, XL)"
              className="form-control mt-1"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.size}
            />
            {formik.touched.size && formik.errors.size ? (
              <div>{formik.errors.size}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <input
              id="color"
              name="color"
              placeholder="Colors (red, purple, etc)"
              className="form-control mt-1"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.color}
            />
            {formik.touched.color && formik.errors.color ? (
              <div>{formik.errors.color}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={formik.values.inStock}
                id="inStock"
              />
              <label className="form-check-label" htmlFor="inStock">
                In Stock
              </label>
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
