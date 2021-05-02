import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es';

const Clock = (props) => {
  const nums = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q'];

  const animeRef = React.useRef(null);

  const now = new Date();
  const secs = now.getSeconds();

  let deg = Math.round((secs / 60) * 360);

  const tick = () =>
    anime({
      targets: '.seconds',
      duration: 300,
      delay: 700,
      translateX: -0.75,
      rotate: () => (deg += 6),
      easeing: 'spring(0, 80, 10, 10)',
      complete: tick,
    });

  React.useEffect(
    () =>
      (animeRef.current = anime({
        targets: '.seconds',
        duration: 300,
        delay: 700,
        translateX: -0.75,
        rotate: () => (deg += 6),
        easeing: 'spring(0, 90, 10, 10)',
        complete: tick,
      }))
  );

  return (
    <div id="container">
      <svg viewBox="0 0 100 100" width="150" height="150">
        <circle id="border" cx="50" cy="50" r="46" fill="#303335"></circle>
        <circle id="face" cx="50" cy="50" r="42" fill="white"></circle>
        <g
          className="clock_face"
          fontSize="8px"
          transform="translate(50 50)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {nums.map((num, i) => (
            <text
              key={i}
              transform={`rotate(${
                -90 + 30 * (i + 1)
              }) translate(34 0) rotate(${90 - 30 * (i + 1)})`}
            >
              {num}
            </text>
          ))}
          <text id="king">K</text>
        </g>
        <g className="hands" transform="translate(50 50)">
          <g className="seconds">
            <path fill="black" d="M -0.4 10 h 0.8 v -45 h -0.8 z"></path>
            <circle
              strokeWidth="0.4"
              stroke="black"
              fill="black"
              cx="0"
              cy="0"
              r="0.8"
            ></circle>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Clock;
