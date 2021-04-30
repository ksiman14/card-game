import React, { Component } from 'react';
import { connect } from 'react-redux';
import { turnOver } from '../store/cards';
import Card from './Card';

class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    // if (this.props.currentCard.display_name === evt.target.innerText) {
    //   this.props.turnOver()
    // }
  }

  render() {
    const cards = this.state.cards;
    const box = this.props.box;
    return (
      <div className="card_stack">
        <button type="button" onClick={this.handleClick}>
          {box}
        </button>
        {cards.map((card) => (
          <Card key={card.id} card={card} box={box} />
        ))}
      </div>
    );
  }
}

const mapState = (state) => ({
  currentCard: state.currentCard,
});

const mapDispatch = (dispatch) => ({
  turnOver: (id) => dispatch(turnOver(id)),
});

export default connect(mapState, mapDispatch)(CardStack);
