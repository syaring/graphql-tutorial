import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { getBooksQuery } from "../Queries/queries";

class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if(data.loading) {
      return (
        <div>
          Lodaing Books...
        </div>
      );
    } else {
      return data.books.map(book => {
        return (
          <li key={ book.id }>
            { book.name }
          </li>
        );
      });
    }
  }
  
  render() {
    return (
      <div>
        <ul id="book-list">
          { this.displayBooks() }
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
