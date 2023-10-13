import React from 'react';
import { ContactTtem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(contact => (
      <ContactTtem key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </List>
);
