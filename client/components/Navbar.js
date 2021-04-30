import React from 'react';
import { connect } from 'react-redux';
import { redeal } from '../store/cards';

const Navbar = (props) => {
  const handleClick = () => {
    props.redeal();
  };
  return (
    <nav>
      <p>Clock Solitaire</p>
      <button type="button" onClick={handleClick}>
        Deal Again!
      </button>
    </nav>
  );
};

const mapDispatch = (dispatch) => ({
  redeal: () => dispatch(redeal()),
});

export default connect(null, mapDispatch)(Navbar);
