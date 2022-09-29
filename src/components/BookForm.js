/* eslint-disable jsx-a11y/label-has-associated-control */
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'title') setTitle(value);
    else if (name === 'author') setAuthor(value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="title"
            id="title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <input type="text" id="author" placeholder="Auther" name="author" onChange={handleChange} />
        </div>
        <button type="submit">
          Add Book
        </button>
      </form>
    </>
  );
};
export default BookForm;
