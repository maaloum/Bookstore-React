import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button">Remove Book</button>
    </div>

  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
