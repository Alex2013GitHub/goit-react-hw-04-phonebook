import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container/Container.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  const handleContactSubmit = ({ name, number }) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} вже є у контактах.`);
      return;
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    setContacts(prevContact => [...prevContact, newContact]);
  };
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleDelete = contactId => {
    setContacts(prevContact =>
      prevContact.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onContactSubmit={handleContactSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </Container>
  );
};
