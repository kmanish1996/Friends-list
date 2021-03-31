import React from 'react';

import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img 
        alt = 'friends'
        src = {`https://robohash.org/${props.friends.id}?set=set1&size=180x180`}
        />
        <h2>{props.friends.name}</h2>
        <p>{props.friends.email}</p>
    </div>
)
