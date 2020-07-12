import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      author: '',
      length: '',
      status: '',
    }
  }
  render() {
    return (
      <div className="Book"></div>
    )
  }
}
export default Book;