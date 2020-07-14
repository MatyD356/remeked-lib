import React from 'react';
import './Book.scss';

const Book = (props) => {
  return (
    <div className="Book">
      <h2 className="Book-title">{props.name}</h2>
      <p className="Book-author">Author: {props.author}</p>
      <p className="Book-lenght">Pages: {props.length}</p>
      <p className="Book-status">Readed: {props.status}</p>
      <div className="Book-btn-container">
        <button className="Book-btn change">Change Status</button>
        <button className="Book-btn">Delete book</button>
      </div>
    </div>
  )
}
export default Book;