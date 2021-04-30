import axios from 'axios';

const SET_CARDS = 'SET_CARDS';

const setCards = (cards) => ({
  type: SET_CARDS,
  cards,
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

export const turnOver = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/cards/${id}`);
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
    default:
      return state;
  }
}
