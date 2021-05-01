import React from 'react';
import anime, { AnimeInstance } from 'animejs/lib/anime.es';

const Lost = (props) => {
  const animeRef = React.useRef(null);

  React.useEffect(
    () =>
      (animeRef.current = anime({
        targets: '#sad_face',
        duration: 1000,
        loop: true,
        rotate: 360,
        elasticity: 600,
        easing: 'easeOutElastic',
        delay: function (el, index) {
          return index * 80;
        },
      }))
  );

  return (
    <div id="lost">
      <p>Sorry, you lost...</p>
      <img id="sad_face" src="crying_face.png" />
      <button type="button" onClick={props.handleClick}>
        Play Again!
      </button>
    </div>
  );
};

export default Lost;
