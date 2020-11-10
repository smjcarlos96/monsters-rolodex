import React from 'react';

import './search-box.css';

// This is a functional component. It consists of a constant-anonymous function that returns JSX code.
// Functional components do not extend from Component, so they don't have access to state, constructor, life cycle methods.
// They're simple components that don't need any resources and just return JSX.
// As well as components only get one parameter named props it's necessary to destructure it for easier access to props' properties.
export const SearchBox = ({ placeholder, handleChange }) => (
  <input type='search' className='search' placeholder={placeholder} onChange={handleChange} />
);
