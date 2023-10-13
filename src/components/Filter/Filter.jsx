import React from 'react';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={onChange}
    />
  </label>
);
