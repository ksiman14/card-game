import React from 'react';
import anime from 'animejs/lib/anime.es';

const Won = (props) => {
  const animeRef = React.useRef(null);

  React.useEffect(
    () =>
      (animeRef.current = anime({
        targets: '#hug_face',
        scaleY: [
          { value: 0.8, duration: 200 },
          { value: 1, duration: 200, delay: 150 },
        ],
        translateY: [
          { value: -20, duration: 200, delay: 200 },
          { value: 0, duration: 200, delay: 250 },
        ],
        loop: true,
        easing: 'linear',
      }))
  );

  return (
    <div id="won">
      <p>Congratulations, you won!</p>
      <img id="hug_face" src="hugging-face.png" />
      <button type="button" onClick={props.handleClick}>
        Play Again!
      </button>
    </div>
  );
};

export default Won;
