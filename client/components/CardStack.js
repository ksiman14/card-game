import React, { Component } from 'react';
import Card from './Card';

class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
    };
  }

  render() {
    const cards = this.state.cards;
    return (
      <div className="card_stack">
        <p>{this.props.box}</p>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

export default CardStack;
