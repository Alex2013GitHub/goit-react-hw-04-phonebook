import React, { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ onContactSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ev => {
    const { name, value } = ev.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    onContactSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Enter contact name"
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            required
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};
