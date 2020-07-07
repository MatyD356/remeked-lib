import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: '',
      length: '',
      status: false
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
      case 'status':
        this.setState({ status: e.target.checked })
        break;
      default:
        return;
    }
  }
  gatherData = () => {
    console.log(this.state);
    this.setState({
      name: '',
      author: '',
      length: '',
      status: false
    })
  }
  render() {
    return (
      <form className="Aside-form">
        <label htmlFor="book-name">Book name
        <input
            id="book-name"
            className="name-input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="book-author">Book author
        <input
            id="book-author"
            className="author-input"
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="book-length">Book length
        <input
            id="book-length"
            className="length-input"
            type="text"
            name="length"
            value={this.state.length}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="book-status">Book status
        <input
            id="book-status"
            className="status-input"
            type="checkbox"
            name="status"
            checked={this.state.status}
            onChange={this.handleChange}
          />
        </label>
        <button
          type="button"
          onClick={() => {
            this.gatherData()
          }}
          className="submit-book-button"
        >Add book</button>
      </form>
    )
  }
}
export default Form