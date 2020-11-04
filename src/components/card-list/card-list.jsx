import React from 'react';

import { Card } from '../card/card';

import './card-list.css';

export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      // For the same single responsibility principle the layout of each unit should be under another component.
      // The list component has its own layout already.
      /*
        Once the card component is defined can be imported and used directly, making use of the key attribute and passing
        the rest of the object through the custom 'monster' attribute.
      */
      <Card key={monster.id} monster={monster}/>
    ))}
  </div>
);