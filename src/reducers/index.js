import { combineReducers } from 'redux';

import query from './query_reducer';
import weather_data from './weather_data_reducer';

export default combineReducers({
  query
});
