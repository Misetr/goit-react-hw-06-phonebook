import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';

const FilterContacts = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form>
      <input onChange={handleInput} type="text" />
    </form>
  );
};

export default FilterContacts;
