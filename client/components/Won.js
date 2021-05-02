import React from 'react';

const Won = (props) => {
  const animeRef = React.useRef(null);

  // React.useEffect(
  //   () =>
  //     (animeRef.current = anime({
  //       targets: '#sad_face',
  //       duration: 1000,
  //       loop: true,
  //       rotate: 360,
  //       elasticity: 600,
  //       easing: 'easeOutElastic',
  //       delay: function (el, index) {
  //         return index * 80;
  //       },
  //     }))
  // );

  return (
    <div id="won">
      <p>Congratulations, you won!</p>
      <button type="button" onClick={props.handleClick}>
        Play Again!
      </button>
    </div>
  );
};

export default Won;
