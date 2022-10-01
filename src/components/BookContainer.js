import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';
import { getBooks } from '../redux/books/book';

const BookContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <>
      <BookList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
