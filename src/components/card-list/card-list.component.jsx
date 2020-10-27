import React from 'react';
import {Card} from '../card/card.component';

import "./card-list.styles.css";

export const CardList = (props) => ( //Different way of setting up the component function files instead of using the normal Default export - Why is this a const?
    //For props.children - this will return anything that is between the brackets in the App file
    
    
    <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
      
    ))}
    </div>
);