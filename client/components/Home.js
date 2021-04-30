import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dealCards } from '../store/cards';
import CardRow from './CardRow';

class Home extends Component {
  componentDidMount() {
    this.props.dealCards();
  }

  render() {
    return (
      <div id="table">
        <CardRow cards={1} position="top" />
        <CardRow cards={2} position="end_middle" />
        <CardRow cards={2} position="middle" />
        <CardRow cards={3} position="center" />
        <CardRow cards={2} position="middle" />
        <CardRow cards={2} position="end_middle" />
        <CardRow cards={1} position="bottom" />
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
