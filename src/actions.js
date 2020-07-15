export function addBook(newBook) {
  return {
    type: 'ADD',
    payload: newBook
  }
}