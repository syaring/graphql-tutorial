import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { getBookQuery } from "../Queries/queries";

class BookDatails extends Component {
  render() {
    return (
      <div id="book-details">
        <p>Output book details here</p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDatails);
