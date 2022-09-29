import { combineReducers, createStore } from '@reduxjs/toolkit';
import booksReducer from './books/book';
import categoriesReducer from './categorie/categories';

const rootReducer = combineReducers({
  BOOKREDUCER: booksReducer,
  Category: categoriesReducer,

});

const store = createStore(
  rootReducer,
);

export default store;
