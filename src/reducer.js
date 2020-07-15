const initialState = {
  books: [{ name: "LOTR", author: "Tolkien", length: 120, status: "Yes" },
  { name: "Hobbit", author: "Tolkien", length: 120, status: "No" }]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        books: [...state.books, action.payload]
      }
    case 'REMOVE':
      return {
        books: state.books.slice(0, action.payload)
          .concat(state.books.slice(action.payload + 1, state.books.length - 1))
      }
    case 'CHANGE':
      state.books[action.payload] = Object.assign(
        {}, state.books[action.payload],
        { status: state.books[action.payload].status === 'Yes' ? 'No' : 'Yes' }
      )
      return {
        books: [...state.books]
      }
    default:
      return state
  }
};