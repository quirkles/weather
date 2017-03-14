import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default initial_state => createStore(
  rootReducer,
  initial_state,
  applyMiddleware(thunk)
);
