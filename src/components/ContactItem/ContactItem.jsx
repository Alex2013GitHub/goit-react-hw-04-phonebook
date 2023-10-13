import React from 'react';
import { ListItem, ContactInfo, DeleteButton } from './ContactItem.styled';

export const ContactTtem = ({ contact, onDelete }) => (
  <ListItem>
    <ContactInfo>
      {contact.name}: {contact.number}
    </ContactInfo>
    <DeleteButton onClick={() => onDelete(contact.id)}>Delete</DeleteButton>
  </ListItem>
);
