import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';

const BookContainer = () => {
  const books = useSelector((state) => state.BOOKREDUCER.books);
  return (
    <>
      <BookList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
