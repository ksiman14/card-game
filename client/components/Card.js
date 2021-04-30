import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.card,
      box: props.box,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <React.Fragment>
        <img
          className="card"
          src={
            this.state.hidden
              ? '/cards/blue_back.png'
              : this.state.imageUrl + '.png'
          }
          onClick={this.handleClick}
        />
      </React.Fragment>
    );
  }
}

const mapState = (state) => ({
  currentCard: state.currentCard,
});

export default connect(mapState, null)(Card);
