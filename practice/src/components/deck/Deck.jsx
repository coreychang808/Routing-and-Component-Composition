import React from 'react';
import Card from '../Card/Card';

export default (props) => {
    const deck = props.deckData;

    return (
        <>
            <section className="deck">
           <header><h2>{deck.title}</h2></header>

          {deck.records.map( (card) =>
            <Card cardData = {card}/>
          )}

        </section>
        </>
    )
};