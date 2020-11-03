import React from 'react';

import './card-list.css';

export const CardList = props => {
  //'name' property is made up by us on the outside, now accessible with props.name.
  console.log(props.name);
  //'children' is a default property that is initialized with the content between opening and closing tags of a component.
  //'className' attribute on the element below applies the card-list class defined from the imported CSS.
  return (<div className='card-list'>{props.children}</div>)
}