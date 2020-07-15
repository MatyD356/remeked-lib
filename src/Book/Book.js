import React from 'react';
import './Book.scss';
import { connect } from 'react-redux';
import { removeBook, changeBook } from '../actions';

const Book = (props) => {
  const remove = () => {
    props.removeThisBook(props.id)
  }
  const change = () => {
    props.changeState(props.id)
  }
  return (
    <div className="Book">
      <h2 className="Book-title">{props.name}</h2>
      <p className="Book-author">Author: {props.author}</p>
      <p className="Book-lenght">Pages: {props.length}</p>
      <p className="Book-status">Readed: {props.status}</p>
      <div className="Book-btn-container">
        <button className="Book-btn change" onClick={change}>Change Status</button>
        <button className="Book-btn" onClick={remove}>Delete book</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeThisBook: (book) => {
      dispatch(removeBook(book))
    },
    changeState: (bookIndex) => {
      dispatch(changeBook(bookIndex))
    }
  };
};
export default connect(null, mapDispatchToProps)(Book);