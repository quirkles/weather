import {Map} from 'immutable';

import {
  UPDATE_QUERY_SEARCH_STRING
} from '../constants/query_constants';

import {HANDLE_GET_FORECAST_RESPONSE} from '../constants/weather_data_constants';

const default_state = Map({
  'search_string': '',
  has_searched: false
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
      case HANDLE_GET_FORECAST_RESPONSE:
        return state.set('has_searched', true)
      default:
        return state;
    }
  }
};
