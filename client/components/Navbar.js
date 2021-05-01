import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCards, redeal } from '../store/cards';

const Navbar = (props) => {
  const handleClick = () => {
    props.clearCards();
    props.redeal();
  };
  return (
    <div id="nav">
      <p>Clock Solitaire</p>
      <Link to="/">Home</Link>
      <Link to="/about">How Do I Play?</Link>
      <button type="button" onClick={handleClick}>
        Deal Again!
      </button>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  clearCards: () => dispatch(clearCards()),
  redeal: () => dispatch(redeal()),
});

export default connect(null, mapDispatch)(Navbar);
