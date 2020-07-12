import React from 'react'
import './Form.css'
import RadioButton from '../RadioButton/RadioButton'

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
    this.setState({
      name: '',
      author: '',
      length: '',
      status: '',
    }, console.log(this.state))
  }
  radioChangeHandler = (event) => {
    this.setState({
      status: event.target.value
    }, console.log(this.state));
  }
  render() {
    return (
      <form
        className="Form"
        onSubmit={this.gatherData}
      >
        <label htmlFor="book-name">Book name
        <input
            id="book-name"
            className="name-input"
            type="text"
            name="name"
            minLength={3}
            value={this.state.name}
            onChange={this.handleChange}
            onBlur={this.handleChange}
            required={true}
          />
          <div className="error" />
        </label>
        <label htmlFor="book-author">Book author
        <input
            id="book-author"
            className="author-input"
            type="text"
            name="author"
            minLength={3}
            value={this.state.author}
            onChange={this.handleChange}
            onBlur={this.handleChange}
            required={true}
          />
          <div className="error" />
        </label>
        <label htmlFor="book-length">Book length
        <input
            id="book-length"
            className="length-input"
            type="number"
            name="length"
            value={this.state.length}
            onChange={this.handleChange}
            onBlur={this.handleChange}
            required={true}
          />
          <div className="error" />
        </label>
        <div className="radio-btn-container">Did u read the book?
          <RadioButton
            name="status"
            changed={this.radioChangeHandler}
            id="1"
            isSelected={this.state.status === "Yes"}
            label="Yes"
            value="Yes"
          />
          <RadioButton
            name="status"
            changed={this.radioChangeHandler}
            id="2"
            isSelected={this.state.status === "No"}
            label="No"
            value="No"
          />
        </div>
        <button
          className="submit-book-button">Add book
        </button>
      </form>
    )
  }
}

export default Form