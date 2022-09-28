import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/book';
import categoriesReducer from './categorie/categories';

const rootReducer = combineReducers({
  BOOKREDUCER: booksReducer(),
  Category: categoriesReducer(),

});

export default rootReducer;
