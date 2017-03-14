import {Map} from 'immutable';

import {
  UPDATE_QUERY_SEARCH_STRING
} from '../constants/query_constants';

const default_state = Map({
  'search_string': ''
});

export default (state = default_state, action) => {
  if (!(action && action.type)) {
    return state;
  } else {
    switch (action.type) {
      case UPDATE_QUERY_SEARCH_STRING:
        return state.set(
          'search_string',
          action.search_string || action.search_string === '' ? action.search_string : state.get('search_string')
        );
      default:
        return state;
    }
  }
};
