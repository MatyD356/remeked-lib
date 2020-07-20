import React from 'react'
import './Form.scss'
import { connect } from 'react-redux';
import { addBook } from '../actions';
import { useFormik } from "formik";
import * as Yup from 'yup';

const SignupForm = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      author: '',
      length: '',
      status: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be at least 3 characters long')
        .max(15, 'Must be shorten than 15 characters')
        .required('Required'),
      author: Yup.string()
        .min(3, 'Must be at least 3 characters long')
        .max(15, 'Must be shorten than 15 characters')
        .required('Required'),
      length: Yup.string()
        .matches(/^[0-9]*$/, 'Must be a number')
        .required('Required'),
      status: Yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      props.addNewBook(values)
    }
  });
  return (
    <form
      className="aside-form"
      onSubmit={formik.handleSubmit}
    >
      <label
        htmlFor="name"
        className={formik.errors.name ? "label-error" : null}
      >Book name
      {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>) : null}
      </label>
      <input
        className={formik.errors.name ? "input-error" : null}
        id="name"
        type="text"
        {...formik.getFieldProps('name')}
      />
      <label
        htmlFor="author"
        className={formik.errors.author ? "label-error" : null}
      >Author name
      {formik.touched.author && formik.errors.author ? (
          <p className="error">{formik.errors.author}</p>
        ) : null}</label>
      <input
        className={formik.errors.author ? "input-error" : null}
        onChange={formik.handleChange}
        id="author"
        type="text"
        {...formik.getFieldProps('author')}
      />
      <label
        className={formik.errors.length ? "label-error" : null}
        htmlFor="length">
        Book length
      {formik.touched.length && formik.errors.length ? (
          <p className="error">{formik.errors.length}</p>) : null}
      </label>
      <input
        className={formik.errors.length ? "input-error" : null}
        id="length"
        type="text"
        {...formik.getFieldProps('length')}
      />
      <div className="radio-btn-container">
        <label className={formik.errors.status ? "label-error" : null}>
          Did u read the book?
        {formik.touched.status && formik.errors.status ? (
            <div className="error" >{formik.errors.status}</div>) : null}
        </label>
        <div className="RadioButton">
          <input
            id="1"
            name="status"
            onChange={formik.handleChange}
            value="Yes"
            type="radio"
            defaultChecked={formik.values.gender === "Yes"}
          />
          <label
            htmlFor="1">Yes</label>
        </div>
        <div className="RadioButton">
          <input
            id="2"
            name="status"
            onChange={formik.handleChange}
            value="No"
            type="radio"
            defaultChecked={formik.values.gender === "No"}
          />
          <label htmlFor="2">No</label>
        </div>
      </div>
      <button
        className="submit-book-button"
        type="submit">
        Submit
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewBook: (newBook) => {
      dispatch(addBook(newBook))
    }
  };
};

export default connect(null, mapDispatchToProps)(SignupForm)