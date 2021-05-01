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
      <h1>Clock Solitaire</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/rules">How Do I Play?</Link>
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          Deal Again!
        </button>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  clearCards: () => dispatch(clearCards()),
  redeal: () => dispatch(redeal()),
});

export default connect(null, mapDispatch)(Navbar);
