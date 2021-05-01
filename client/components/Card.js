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

  componentDidUpdate(prevProps) {
    const current = this.props.currentCard;
    if (prevProps.currentCard !== current) {
      if (current.id == this.state.id) {
        this.setState({
          ...this.state,
          hidden: false,
        });
      }
    }
  }

  handleClick() {
    const current = this.props.currentCard;
    if (current.id === this.state.id) {
      this.setState({
        ...this.state,
        hidden: false,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <img
          className={'card ' + this.props.box}
          src={
            this.state.hidden
              ? `/cards/${this.props.color}_back.png`
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
  color: state.color,
});

export default connect(mapState, null)(Card);
