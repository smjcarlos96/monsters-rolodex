import React from 'react';

import './card.css'

export const Card = props => (
  // The layout is defined here and its information completed with the data passed through props object.
  <div className='card-container'>
    <img src={`https://robohash.org/${props.monster.name}?set=set1&size=180x180`} alt='monster'/>
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);