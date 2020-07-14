import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'


const initialState = {
  books: [{ name: "LOTR", author: "Tolkien", length: 120, status: "Yes" }]
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        books: [...state.books, action.payload]
      }
    case "DELETE":
      return {
        state: []
      }
    default:
      return state
  }
};

const store = createStore(booksReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

