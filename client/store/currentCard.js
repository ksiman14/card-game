import axios from 'axios';

const SET_CARD = 'SET_CARD';

const setCard = (card) => ({
  type: SET_CARD,
  card,
});

export const setCurrentCard = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cards/${id}`);
      dispatch(setCard(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CARD:
      return action.card;
    default:
      return state;
  }
}
