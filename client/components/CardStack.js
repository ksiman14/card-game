import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentCard } from '../store/currentCard';
import { setCurrentStack, removeCard } from '../store/currentStack';
import Card from './Card';

class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    const current = this.props.currentCard;
    const stack = this.props.currentStack;
    const cards = this.state.cards;

    if (
      prevProps.currentStack !== stack &&
      cards.find((card) => card.id === current.id)
    ) {
      if (stack[0] === this.state.cards[0]) {
        this.setState({
          cards: stack,
        });
      } else {
        const num = cards.length - 1;
        this.props.setCurrentCard(cards[num].id);
      }
    }

    if (prevProps.currentCard !== current) {
      if (cards.find((card) => card.id === current.id)) {
        this.props.setCurrentStack(cards);
      }
    }
  }

  handleClick(evt) {
    if (this.props.currentCard.display_name === evt.target.innerText) {
      if (
        this.state.cards.find((card) => card.id === this.props.currentCard.id)
      ) {
        const num = this.state.cards.length - 2;
        const last = this.state.cards[num].id;
        const revisedCards = this.state.cards.filter(
          (card) => card.id !== this.props.currentCard.id
        );

        this.setState({
          cards: [this.props.currentCard, ...revisedCards],
        });

        this.props.setCurrentCard(last);
      } else {
        this.setState({
          cards: [this.props.currentCard, ...this.state.cards],
        });

        this.props.removeCard();
      }
    }
  }

  render() {
    const cards = this.state.cards;
    const box = this.props.box;

    return (
      <div className="card_stack">
        <button type="button" onClick={this.handleClick}>
          {box}
        </button>
        {cards.map((card, i) => (
          <Card key={card.id} card={card} box={box} />
        ))}
      </div>
    );
  }
}

const mapState = (state) => ({
  currentCard: state.currentCard,
  currentStack: state.currentStack,
  status: state.status,
});

const mapDispatch = (dispatch) => ({
  setCurrentCard: (id) => dispatch(setCurrentCard(id)),
  setCurrentStack: (stack) => dispatch(setCurrentStack(stack)),
  removeCard: () => dispatch(removeCard()),
});

export default connect(mapState, mapDispatch)(CardStack);
