import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/book';
import categoriesReducer from './categorie/categories';

// const rootReducer = combineReducers({
//   BOOKREDUCER: booksReducer,
//   Category: categoriesReducer,

// });

// const store = createStore(
//   rootReducer,
// );

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
}, applyMiddleware(thunk));

export default store;
