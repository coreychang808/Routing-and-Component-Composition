import React from 'react';

import Deck from "../deck/Deck";
const Page = (props) => {

  const content = props.content || [];

  return (
    <>
      {content.map( (deck,i) => (
        <Deck deckData = {deck}/>
      

      ))}
    </>
  );
};

export default Page;
