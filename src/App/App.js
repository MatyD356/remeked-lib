import React from 'react';
import './App.css';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }
  addNewBook = () => {
    console.log('added');

  }
  render() {
    return (
      <div className="App" >
        <Aside
          addNewBook={this.addNewBook}
        />
        <Main
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
