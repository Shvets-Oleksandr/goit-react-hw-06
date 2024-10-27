import css from './App.module.css';

import initialContacts from '../../contacts.json';

import ContactForm from '../contactForm/ContactForm';
import SearchBox from '../searchBox/SearchBox';
import ContactList from '../contactList/ContactList';

import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState(() => {
    const localContacts = window.localStorage.getItem('savedContacts');
    return localContacts ? JSON.parse(localContacts) : initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const filtredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div className={css.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filtredContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
