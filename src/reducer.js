const initialState = {
  books: [{ name: "LOTR", author: "Tolkien", length: 120, status: "Yes" }]
}

export default (state = initialState, action) => {
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