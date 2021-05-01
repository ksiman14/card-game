const colors = ['blue', 'gray', 'green', 'purple', 'red', 'yellow'];

const SET_COLOR = 'SET_COLOR';

const setColor = (color) => ({
  type: SET_COLOR,
  color,
});

export const changeColor = () => {
  return (dispatch) => {
    const idx = Math.floor(Math.random() * colors.length);
    const color = colors[idx];
    dispatch(setColor(color));
  };
};

export default function (state = 'blue', action) {
  switch (action.type) {
    case SET_COLOR:
      return action.color;
    default:
      return state;
  }
}
