import React from 'react';
import anime from 'animejs/lib/anime.es';

const Lost = (props) => {
  return (
    <div id="lost">
      <p>Sorry, you lost...</p>
      <img src="crying_face.png" />
      <button type="button" onClick={props.handleClick}>
        Play Again!
      </button>
    </div>
  );
};

export default Lost;
