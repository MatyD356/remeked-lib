import React from 'react'
import './Form.scss'
import { connect } from 'react-redux';
import { addBook } from '../actions';
import { useFormik } from "formik";
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      status: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, 'Must be at least 3 characters long')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .min(3, 'Must be at least 3 characters long')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid emaiil address')
        .required('Required'),
      status: Yup.bool()
        .required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        {...formik.getFieldProps('lastName')}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
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
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: '',
      length: '',
      status: '',
    }
  }
  handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        this.setState({ name: e.target.value })
        break;
      case 'author':
        this.setState({ author: e.target.value })
        break;
      case 'length':
        this.setState({ length: e.target.value })
        break;
      default:
        return;
    }
  }
  gatherData = (e) => {
    e.preventDefault();
    this.props.addNewBook(this.state)
    this.setState({
      name: '',
      author: '',
      length: '',
      status: '',
    })
  }
  radioChangeHandler = (event) => {
    this.setState({
      status: event.target.value
    });
  }
  render() {

    return (
      <SignupForm />
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewBook: (newBook) => {
      dispatch(addBook(newBook))
    }
  };
};

export default connect(null, mapDispatchToProps)(Form)