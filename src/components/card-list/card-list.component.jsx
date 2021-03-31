import React from 'react';
import {Card} from '../card/card.componet';
import './card-list.styles.css';

export const CardList = props => (
     <div className='card-list'>
        {
          props.friends.map(friends => 
          <Card key={friends.id} friends={friends}/>)
        }
    </div>
);