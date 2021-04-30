import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cards from './cards';
import currentCard from './currentCard';
import currentStack from './currentStack';

const reducer = combineReducers({
  cards,
  currentCard,
  currentStack,
});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, middleware);

export default store;
