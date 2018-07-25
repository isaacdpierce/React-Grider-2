export function selectBook(book) {
  // selectBook is an actionCreator - it needs to create an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
} 

// This Action Creator must be wired up to Redux