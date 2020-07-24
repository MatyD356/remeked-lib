import React from 'react';
import './Book.scss';
import { changeStatusFromFirebase, removeTaskFromFirebase } from '../firebase'
import { watchTaskRemovedEvent, watchTaskChangeEvent } from '../store'
import { connect } from 'react-redux';

const mapDispatch = dispatch => {
  watchTaskRemovedEvent(dispatch)
  watchTaskChangeEvent(dispatch)
  return {
  }
}

const Book = (props) => {
  return (
    <div className="Book">
      <h2 className="Book-title">{props.name}</h2>
      <p className="Book-author">Author: {props.author}</p>
      <p className="Book-lenght">Pages: {props.length}</p>
      <p className="Book-status">Readed: {props.status}</p>
      <div className="Book-btn-container">
        <button
          className="Book-btn change"
          onClick={() => changeStatusFromFirebase(props.id, props.status)}>
          Change Status
        </button>
        <button
          className="Book-btn"
          onClick={() => removeTaskFromFirebase(props.id)}>
          Delete book
        </button>
      </div>
    </div >
  )
}


export default connect(null, mapDispatch)(Book);