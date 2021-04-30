import React from 'react';
import CardStack from './CardStack';

const CardRow = (props) => {
  const boxes = props.boxes;
  const cards = props.cards.map((card, i) => ({ cards: card, box: boxes[i] }));
  const position = props.position;
  return (
    <div className={'row ' + position}>
      {cards.map((stack, i) => {
        return <CardStack box={stack.box} key={i} cards={stack.cards} />;
      })}
    </div>
  );
};

export default CardRow;
