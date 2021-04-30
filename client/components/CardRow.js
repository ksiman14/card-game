import React from 'react';
import CardStack from './CardStack';

const CardRow = (props) => {
  const cardStacks = new Array(props.cards).fill('');
  const position = props.position;
  return (
    <div className={'row ' + position}>
      {cardStacks.map((stack, i) => {
        return <CardStack key={i} />;
      })}
    </div>
  );
};

export default CardRow;
