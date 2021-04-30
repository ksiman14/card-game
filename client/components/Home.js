import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dealCards } from '../store/cards';
import { setCurrentCard } from '../store/currentCard';
import CardRow from './CardRow';

class Home extends Component {
  componentDidMount() {
    this.props.dealCards();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hand.length !== this.props.hand.length) {
      this.props.setCurrentCard(this.props.hand[27].id);
    }

    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    const hand = this.props.hand || [];
    const currentStack = this.props.currentStack || [];
    if (
      currentStack.length === 4 &&
      !currentStack.find((card) => card.display_name !== 'king')
    ) {
      return (
        <div id="lost">
          <p>Sorry, You Lost!</p>
        </div>
      );
    }
    return (
      <div>
        {hand.length > 1 ? (
          <div id="table">
            <CardRow
              boxes={['ace']}
              cards={[hand.slice(0, 4)]}
              position="top"
            />
            <CardRow
              boxes={['queen', 'two']}
              cards={[hand.slice(4, 8), hand.slice(8, 12)]}
              position="end_middle"
            />
            <CardRow
              boxes={['jack', 'three']}
              cards={[hand.slice(12, 16), hand.slice(16, 20)]}
              position="middle"
            />
            <CardRow
              boxes={['ten', 'king', 'four']}
              cards={[
                hand.slice(20, 24),
                hand.slice(24, 28),
                hand.slice(28, 32),
              ]}
              position="center"
            />
            <CardRow
              boxes={['nine', 'five']}
              cards={[hand.slice(32, 36), hand.slice(36, 40)]}
              position="middle"
            />
            <CardRow
              boxes={['eight', 'six']}
              cards={[hand.slice(40, 44), hand.slice(44, 48)]}
              position="end_middle"
            />
            <CardRow
              boxes={['seven']}
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
  dealCards: () => dispatch(dealCards()),
  setCurrentCard: (id) => dispatch(setCurrentCard(id)),
});

export default connect(mapState, mapDispatch)(Home);
