import React, { useState } from 'react';

export function inputText() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input value:', inputValue);
    props.inputText = inputValue;
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input value:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}