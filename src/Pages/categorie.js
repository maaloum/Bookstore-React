import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categorie/categories';
import '../Styles/Category.css';

const Categorie = () => {
  const dispatch = useDispatch();
  return (
    <div className="category">
      <h1>Categorie</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        check status
      </button>
    </div>
  );
};

export default Categorie;
