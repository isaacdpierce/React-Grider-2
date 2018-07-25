import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned from here
  // will show up as props inside of BookList
  return {
    books: state.books
  };
}
// the 'connect' function is imported at the top from 'react-redux'
// it creates the connection between the data(Redux) and the view(React)
export default connect (mapStateToProps)(BookList);