import { v4 as uuid } from 'uuid';
// Actions
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// state
const initialState = {
  books: [
    {
      id: uuid(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: uuid(),
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: uuid(),
      title: 'Capital in the Twenty-First Century',
      author: 'S. Piketty',
    },

  ],
};

// create actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
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
