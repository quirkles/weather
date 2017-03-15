import {List, Map} from 'immutable';
import {pick} from 'ramda';
import {HANDLE_GET_FORECAST_RESPONSE, TOGGLE_WEEKLY_SUMMARY} from '../constants/weather_data_constants';

const default_state = Map({
  forecast_items: List([]),
  city_data: Map({})
});

export default (state = default_state, action) => {
  if (!(action && action.type)) {
    return state;
  } else {
    switch (action.type) {
      case HANDLE_GET_FORECAST_RESPONSE:
        return state.merge(pick(['forecast_items', 'city_data'], action));
      case TOGGLE_WEEKLY_SUMMARY:
        return state.set('is_weekly_summary_open', !state.get('is_weekly_summary_open', false));
      default:
        return state;
    }
  }
};
