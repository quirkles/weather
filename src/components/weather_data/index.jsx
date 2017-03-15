import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import NoResults from './no_results';
import ForecastItem from './forecast_item';
import WeatherDataHeader from './weather_data_header';

export const unconnected_weather_data_component = Object.assign(
  ({
    city_data = {},
    forecast_items = []
  }) =>
    forecast_items.map && forecast_items.length ?
      <div>
        <WeatherDataHeader
          city_name = {city_data.name}
          country_code = {city_data.country}
        />
        {forecast_items.map((forecast_item, i) => <ForecastItem key={i} forecast_item={forecast_item}/>)}
      </div> :
      <NoResults/>,
  {
    propTypes: {
      city_data: PropTypes.object,
      forecast_items: PropTypes.array
    }
  });

const map_state_to_props = ({weather_data}) => ({
  city_data: weather_data.get('city_data').toObject(),
  forecast_items: weather_data.get('forecast_items').toArray()
});

const connected_weather_data_component =
  connect(map_state_to_props)(unconnected_weather_data_component);

export default connected_weather_data_component;
