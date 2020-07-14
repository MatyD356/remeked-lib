import React from 'react';
import './Main.scss'
import Book from '../Book/Book'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};

class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        {this.props.books.map((item, index) => {
          console.log(item)
          return <Book
            key={index}
            name={item.name}
            author={item.author}
            length={item.length}
            status={item.status}
          />
        })}
      </main>
    )
  }
}

export default connect(mapStateToProps, null)(Main);