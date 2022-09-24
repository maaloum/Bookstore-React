/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BookForm = () => (
  <form className="book-form">
    <div className="form-control">
      <input type="text" placeholder="title" id="title" name="title" />
    </div>
    <div className="form-control">
      <input type="text" id="author" placeholder="Auther" name="author" />
    </div>
    <button type="submit">Add Book</button>
  </form>
);

export default BookForm;
