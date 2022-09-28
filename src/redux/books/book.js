// Actions
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// state
const initialState = {
  books: [],
};

// create actions

export const addBook = (book) => ({
  type: ADD_BOOK,
  playload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  playload: book,
});

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
}
