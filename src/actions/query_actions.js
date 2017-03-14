import {
  UPDATE_QUERY_SEARCH_STRING,
  HANDLE_FORECAST_RESPONSE
} from '../constants/query_constants';

import {
  fetch_forecast_for_city as fetch_forecast_for_city_request
} from '../requests/forecast';

export const update_query_search_string = search_string => ({
  type: UPDATE_QUERY_SEARCH_STRING,
  search_string
});

const handle_forecast_response = response_data => ({
  type: HANDLE_FORECAST_RESPONSE,
  response_data
});

export const fetch_forecast_for_city = ({city, units = 'metric'}) =>
  dispatch =>
    fetch_forecast_for_city_request({city, units})
    .then(
      ({data}) => dispatch(handle_forecast_response(data)),
      error => console.log(error)
    );
