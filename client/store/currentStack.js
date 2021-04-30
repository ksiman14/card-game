const SET_CURRENT_STACK = 'SET_CURRENT_STACK';
const REMOVE_CARD = 'REMOVE_CARD';

export const setCurrentStack = (stack) => ({
  type: SET_CURRENT_STACK,
  stack,
});

export const removeCard = () => ({
  type: REMOVE_CARD,
});

export default function (state = [], action) {
  switch (action.type) {
    case SET_CURRENT_STACK:
      return action.stack;
    case REMOVE_CARD:
      return state.slice(0, -1);
    default:
      return state;
  }
}
