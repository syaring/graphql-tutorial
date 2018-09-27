import React, { Component } from 'react';
import BookList from './Components/BookList';

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Serim's Reading List</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
