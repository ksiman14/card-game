const SET_CARD = 'SET_CARD';

export const setCard = (card) => ({
  type: SET_CARD,
  card,
});

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CARD:
      return action.card;
    default:
      return state;
  }
}
