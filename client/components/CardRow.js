import React from 'react';
import CardStack from './CardStack';

const CardRow = (props) => {
  const cards = props.cards;
  const position = props.position;
  return (
    <div className={'row ' + position}>
      {cards.map((stack, i) => {
        return <CardStack key={i} cards={cards} />;
      })}
    </div>
  );
};

export default CardRow;
