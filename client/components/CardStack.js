import React, { Component } from 'react';

class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: 4,
      revealed: 0,
    };
  }
  render() {
    return (
      <div>
        <img className="card" src="/cards/blue_back.png" />
        <img className="card" src="/cards/blue_back.png" />
        <img className="card" src="/cards/blue_back.png" />
        <img className="card" src="/cards/blue_back.png" />
      </div>
    );
  }
}

export default CardStack;