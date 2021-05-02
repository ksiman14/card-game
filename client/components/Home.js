import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dealCards, clearCards, redeal } from '../store/cards';
import { setCurrentCard } from '../store/currentCard';
import { clearStack } from '../store/currentStack';
import CardRow from './CardRow';
import Lost from './Lost';
import Won from './Won';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.dealCards();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.hand.length !== this.props.hand.length &&
      this.props.hand.length === 52
    ) {
      this.props.setCurrentCard(this.props.hand[27].id);
    } else if (
      this.props.hand.length === 52 &&
      prevProps.hand[0].id !== this.props.hand[0].id
    ) {
      this.props.dealCards();
    }
  }

  handleClick() {
    this.props.clearCards();
    this.props.clearStack();
    this.props.redeal();
  }

  render() {
    const hand = this.props.hand || [];
    const currentStack = this.props.currentStack || [];
    if (
      currentStack.length === 4 &&
      !currentStack.find((card) => card.display_name !== 'king')
    ) {
      if (hand.find((card) => card.hidden)) {
        return <Lost handleClick={this.handleClick} />;
      } else {
        return <Won handleClick={this.handleClick} />;
      }
    }
    return (
      <div>
        {hand.length > 1 ? (
          <div id="table">
            <CardRow
              boxes={['queen']}
              cards={[hand.slice(0, 4)]}
              position="top"
            />
            <CardRow
              boxes={['jack', 'ace']}
              cards={[hand.slice(4, 8), hand.slice(8, 12)]}
              position="end_middle"
            />
            <CardRow
              boxes={['ten', 'two']}
              cards={[hand.slice(12, 16), hand.slice(16, 20)]}
              position="middle"
            />
            <CardRow
              boxes={['nine', 'king', 'three']}
              cards={[
                hand.slice(20, 24),
                hand.slice(24, 28),
                hand.slice(28, 32),
              ]}
              position="center"
            />
            <CardRow
              boxes={['eight', 'four']}
              cards={[hand.slice(32, 36), hand.slice(36, 40)]}
              position="middle"
            />
            <CardRow
              boxes={['seven', 'five']}
              cards={[hand.slice(40, 44), hand.slice(44, 48)]}
              position="end_middle"
            />
            <CardRow
              boxes={['six']}
              cards={[hand.slice(48)]}
              position="bottom"
            />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  hand: state.cards,
  currentCard: state.currentCard,
  currentStack: state.currentStack,
});

const mapDispatch = (dispatch) => ({
  clearCards: () => dispatch(clearCards()),
  clearStack: () => dispatch(clearStack()),
  dealCards: () => dispatch(dealCards()),
  redeal: () => dispatch(redeal()),
  setCurrentCard: (id) => dispatch(setCurrentCard(id)),
});

export default connect(mapState, mapDispatch)(Home);
