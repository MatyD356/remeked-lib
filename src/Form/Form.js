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
        .trim()
        .matches(/^([a-z]{3,10})$/i, 'To short')
        .required('Required'),
      author: Yup.string()
        .min(3, 'Must be at least 3 characters long')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      length: Yup.number()
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
      <label htmlFor="name">Book name</label>
      <input
        id="name"
        type="text"
        {...formik.getFieldProps('name')}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="error">{formik.errors.name}</div>
      ) : null}
      <label htmlFor="author">Author name</label>
      <input
        pattern="^([a-z]{3,10})$"
        id="author"
        type="text"
        {...formik.getFieldProps('author')}
      />
      {formik.touched.authorName && formik.errors.authorName ? (
        <div className="error">{formik.errors.authorName}</div>
      ) : null}
      <label htmlFor="length">Book length</label>
      <input
        id="length"
        type="number"
        {...formik.getFieldProps('length')}
      />
      {formik.touched.length && formik.errors.length ? (
        <div className="error">{formik.errors.length}</div>
      ) : null}
      <div className="radio-btn-container">Did u read the book?
      <div className="RadioButton">
          <input
            id="1"
            name="status"
            onChange={formik.handleChange}
            value="Yes"
            type="radio"
            defaultChecked={formik.values.gender === "Yes"}
          />
          <label htmlFor="1">Yes</label>
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
        {formik.touched.status && formik.errors.status ? (
          <div >{formik.errors.status}</div>
        ) : null}
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