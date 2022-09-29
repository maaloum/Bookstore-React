import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categorie/categories';

const Categorie = () => {
  const dispatch = useDispatch();
  return (
    <div>
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
