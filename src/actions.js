export function addBook(newBook) {
  return {
    type: 'ADD',
    payload: newBook
  }
}

export function removeBook(bookIndex) {
  return {
    type: 'REMOVE',
    payload: bookIndex
  }
}

export function changeBook(bookIndex) {
  return {
    type: 'CHANGE',
    payload: bookIndex
  }
}