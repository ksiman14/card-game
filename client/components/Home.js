import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dealCards } from '../store/cards';
import CardRow from './CardRow';

class Home extends Component {
  componentDidMount() {
    this.props.dealCards();
  }

  componentDidUpdate() {}

  render() {
    const hand = this.props.hand || [];
    return (
      <div>
        {hand.length > 1 ? (
          <div id="table">
            <CardRow cards={[hand.slice(0, 4)]} position="top" />
            <CardRow
              cards={[hand.slice(4, 8), hand.slice(8, 12)]}
              position="end_middle"
            />
            <CardRow
              cards={[hand.slice(12, 16), hand.slice(16, 20)]}
              position="middle"
            />
            <CardRow
              cards={[
                hand.slice(20, 24),
                hand.slice(24, 28),
                hand.slice(28, 32),
              ]}
              position="center"
            />
            <CardRow
              cards={[hand.slice(32, 36), hand.slice(36, 40)]}
              position="middle"
            />
            <CardRow
              cards={[hand.slice(40, 44), hand.slice(44, 48)]}
              position="end_middle"
            />
            <CardRow cards={[hand.slice(48, -1)]} position="bottom" />
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
});

const mapDispatch = (dispatch) => ({
  dealCards: () => dispatch(dealCards()),
});

export default connect(mapState, mapDispatch)(Home);
