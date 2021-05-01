import React from 'react';

const HowTo = (props) => {
  return (
    <div id="how_to">
      <h1>How To Play</h1>
      <p>Clock Solitaire is entirely a game of chance!</p>
      <p>
        Start with the top card in the middle pile. Click on the pile on the
        "clock" corresponding to that card's value to move it to that pile.
      </p>
      <img id="clock" src="clock.png" />
      <p>Turn over the top card in the new pile and repeat.</p>
      <p>
        If you turn over all of the Kings before every other pile is turned
        over, you lose.
      </p>
      <p>If the last card you turn over is a King, you win!</p>
      <p>Good luck!</p>
    </div>
  );
};

export default HowTo;
