// the state argument is not the application state it is only the state the present reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
    return action.payload
  }
  return state
}