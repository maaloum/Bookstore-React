import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const BookContainer = () => {
  const books = [
    {
      id: 1,
      title: 'I Love You to the Moon and Back',
      author: 'Amelia Hepworth',
    },
    {
      id: 2,
      title: 'Our Class is a Family',
      author: 'Shannon Olsen',
    },
    {
      id: 3,
      title: 'The Wonky Donkey',
      author: 'Craig Smith',
    },

  ];

  return (
    <>
      <BookList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
