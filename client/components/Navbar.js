import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCards, redeal } from '../store/cards';
import { changeColor } from '../store/color';

const Navbar = (props) => {
  const handleClick = () => {
    props.clearCards();
    props.redeal();
  };

  const changeColor = () => {
    props.changeColor();
  };

  return (
    <div id="nav" className={props.color}>
      <h1>Clock Solitaire</h1>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/rules">How Do I Play?</Link>
        <p onClick={changeColor}>Surprise Me!</p>
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          Shuffle
        </button>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  color: state.color,
  currentStack: state.currentStack,
});

const mapDispatch = (dispatch) => ({
  clearCards: () => dispatch(clearCards()),
  redeal: () => dispatch(redeal()),
  changeColor: () => dispatch(changeColor()),
});

export default connect(mapState, mapDispatch)(Navbar);
