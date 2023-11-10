import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';

const AddContacts = ({ addContact }) => {
  const [state, setState] = useState({ name: '', number: '', id: '' });

  const handleChangeInput = e => {
    setState({ ...state, [e.target.name]: e.target.value, id: nanoid() });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(state);
    setState({
      id: '',
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        onChange={handleChangeInput}
        value={state.name}
        type="text"
        name="name"
        required
      />
      <input
        onChange={handleChangeInput}
        value={state.number}
        type="tel"
        name="number"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
AddContacts.propTypes = {
  addContact: PropTypes.func,
};
export default AddContacts;
