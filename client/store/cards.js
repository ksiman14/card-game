import axios from 'axios';

const SET_CARDS = 'SET_CARDS';
const CLEAR_CARDS = 'CLEAR_CARDS';
const UPDATE_CARDS = 'UPDATE_CARDS';

const setCards = (cards) => ({
  type: SET_CARDS,
  cards,
});

export const clearCards = () => ({
  type: CLEAR_CARDS,
});

export const updateCards = (card) => ({
  type: UPDATE_CARDS,
  card,
});

export const dealCards = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/cards');
      dispatch(setCards(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const redeal = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put('/api/cards');
      dispatch(setCards(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case SET_CARDS:
      return action.cards;
    case CLEAR_CARDS:
      return [];
    case UPDATE_CARDS:
      const cards = state.map((card) => {
        if (card.id === action.card.id) {
          return action.card;
        } else {
          return card;
        }
      });
      return cards;
    default:
      return state;
  }
}
