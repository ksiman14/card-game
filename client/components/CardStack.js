import React, { Component } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs/lib/anime.es';
import { setCurrentCard } from '../store/currentCard';
import { setCurrentStack, removeCard } from '../store/currentStack';
import { turn } from '../animate';
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
    const num = this.state.cards.length - 1;
    const last = this.state.cards[num - 1].id;
    const id = this.props.currentCard.id;
    const name = this.props.currentCard.display_name;

    if (name === this.props.box) {
      const current = document.getElementById(id);

      anime({
        targets: current,
        easing: 'linear',
        opacity: 0,
        duration: 300,
      });

      setTimeout(
        function () {
          if (
            this.state.cards.find(
              (card) => card.id === this.props.currentCard.id
            )
          ) {
            const revisedCards = this.state.cards.filter(
              (card) => card.id !== this.props.currentCard.id
            );

            this.setState({
              cards: [this.props.currentCard, ...revisedCards],
            });
            const next = document.querySelectorAll('.' + name)[num];
            const deg = turn(next);

            anime({
              targets: next,
              rotate: deg,
              rotateY: 360,
              duration: 150,
            });

            anime({
              targets: current,
              easing: 'linear',
              opacity: 1,
              duration: 500,
            });

            this.props.setCurrentCard(last);
          } else {
            //ANIMATE??
            this.setState({
              cards: [this.props.currentCard, ...this.state.cards],
            });
            //ANIMATE??
            const next = document.querySelectorAll('.' + name)[num + 1];
            const deg = turn(next);

            anime({
              targets: next,
              rotate: deg,
              rotateY: 360,
              duration: 150,
            });

            this.props.removeCard();

            const last = document.getElementById(id);
            last.style.opacity = '0';
            anime({
              targets: last,
              easing: 'linear',
              opacity: 1,
              duration: 500,
            });
          }
        }.bind(this),
        400
      );
    }
  }

  render() {
    const cards = this.state.cards;
    const box = this.props.box;

    return (
      <div className="card_stack" name={box} onClick={this.handleClick}>
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
