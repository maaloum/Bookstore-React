import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';
import '../Styles/book.css';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook(id));
  return (
    <>
      <div className="wrapper">
        <div className="BookstoreBook">
          <div className="BookstoreBookInfo">
            <p className="BookstoreBookCategory">{category}</p>
            <h3 className="BookstoreBookTitle">{title}</h3>
            <p className="BookstoreBookAuthor">{author}</p>
          </div>
          <div className="BookstoreBookActions">
            <button className="BookstroreComments" type="button">Comments</button>
            <div className="Line-2" />
            <button className="BookstoreBookRemove" type="button" onClick={handleRemove}>Remove</button>
            <div className="Line-2" />
            <button className="BookstoreBookEdit" type="button">Edit</button>
          </div>
        </div>
        <div className="BookstoreBookLine">
          <div className="Oval-2">
            <div className="Rectangle-3" />
          </div>
          <div className="pourcentage">
            <span className="-Percent-Complete">64%</span>
            <span className="Completed Text-Style-2">Completed</span>
          </div>
        </div>
        <div className="BookstoreChaptres">
          <div className="Current-Chapter">Current Chapter</div>
          <div className="Current-Lesson Text-Style-4">Chapter 17</div>
          <div className="Rectangle-2">
            <button className="BookstoreUpdate" type="button">Update Progress</button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
