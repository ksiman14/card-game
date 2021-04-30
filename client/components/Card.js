import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.card,
      hidden: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCard !== this.props.currentCard) {
      if (this.props.currentCard.id === this.props.card.id) {
        this.setState({
          ...this.state,
          hidden: false,
        });
      }
    }
  }

  handleClick() {
    this.setState({
      ...this.state,
      hidden: !this.state.hidden,
    });
  }

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
