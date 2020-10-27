import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'> 
    {/* remember to use the back-tick here for the address or we cannot use the props */}
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
        <h2> {props.monster.name}</h2>
        <p> {props.monster.email}</p>
        
    </div>
);