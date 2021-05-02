import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es';

class Clock extends Component {
  render() {
    const nums = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q'];
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
            <g className="minutes" transform="rotate(240)">
              <path fill="black" d="M -0.4 8 h 0.8 v -33 h -0.8 z"></path>
              <circle fill="white" cx="0" cy="0" r="0.6"></circle>
            </g>

            <g className="seconds" transform="rotate(80)">
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
  }
}

export default Clock;
