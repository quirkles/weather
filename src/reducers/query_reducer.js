import {Map} from 'immutable';

const default_state = Map({
  'search_string': ''
});

export default (state = default_state, action) => {
  if (!(action && action.type)) {
    return state;
  } else {
    switch (action.type) {
      case 'expression':
      return state;
      default:
      return state;
    }
  }
};
