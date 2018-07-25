import React, { Component } from 'react';
import { connect } from 'react-redux'; // the 'connect' function is imported from 'react-redux' - it creates the connection between the data(Redux) and the view(React)
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // function that makes sure the action created flows through all the reducers

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">
          {book.title}
        </li>
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


//Whatever is returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result should be passed to all my reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
  // Magic - can now add this.props.selectBook to the Container
}

// promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect (mapStateToProps, mapDispatchToProps)(BookList);