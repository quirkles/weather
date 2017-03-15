import {
  HANDLE_GET_FORECAST_RESPONSE,
  TOGGLE_WEEKLY_SUMMARY
} from '../constants/weather_data_constants';

import {
  fetch_forecast_for_city as fetch_forecast_for_city_request
} from '../requests/forecast';

export const toggle_weekly_summary = () => ({type: TOGGLE_WEEKLY_SUMMARY});

const handle_get_forecast_response = ({forecast_items, city_data}) => ({
  type: HANDLE_GET_FORECAST_RESPONSE,
  forecast_items,
  city_data
});

export const fetch_forecast_for_city = ({city, units = 'metric'}) =>
  dispatch =>
    fetch_forecast_for_city_request({city, units})
    .then(
      ({data}) => dispatch(handle_get_forecast_response({
        forecast_items: data.list || [],
        city_data: data.city || {}
      })),
      () => dispatch(handle_get_forecast_response({
        forecast_items: [],
        city_data: {}
      }))
    );
