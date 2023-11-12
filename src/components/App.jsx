import AddContacts from './AddContacts/AddContacts';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import FilterContacts from './FilterContacts/FilterContacts';
import { deleteContact, setContacts } from 'redux/slice';

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleAddContact = contact => {
   
    const item = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (item) {
      alert(`${contact.name} is already in contacts`);
    } else {
      dispatch(setContacts(contact));
    }
  };

  const filteredContactsArr = (data, filter) => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <AddContacts addContact={handleAddContact} />

      <h2>Contacts</h2>
      <FilterContacts />

      <ul>
        {filteredContactsArr(contacts, filter).map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <button onClick={() => handleDeleteContact(contact.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
