import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import NoResults from './no_results';
import NotSearched from './not_searched';
import ForecastItem from './forecast_item';
import WeatherDataHeader from './weather_data_header';
import {format, fromTime} from 'date-fp';

import './weather_data.scss';

export const unconnected_weather_data_component = Object.assign(
  ({
    city_data = {},
    forecast_items = [],
    has_searched = false
  }) =>
    forecast_items.map && forecast_items.length ?
      <div className='weather-data-component'>
        <WeatherDataHeader
          city_name = {city_data.name}
          country_code = {city_data.country}
        />
        <div className="weather-item-list-wrapper row">
          {forecast_items.map((forecast_item, i) =>
            <ForecastItem
              key={i}
              summary = {forecast_item.getIn(['weather', 0, 'description'])}
              weather_icon = {forecast_item.getIn(['weather', 0, 'icon'])}
              date_string = {format('MMMM D YYYY', fromTime(forecast_item.get('dt') * 1000))}
              temp = {forecast_item.getIn(['temp', 'day'])}
              humidity = {forecast_item.get('humidity')}
              air_pressure = {forecast_item.get('pressure')}
            />
          )}
        </div>
      </div> :
      has_searched ?
        <NoResults/> :
        <NotSearched/>,
  {
    propTypes: {
      city_data: PropTypes.object,
      forecast_items: PropTypes.array,
      has_searched: PropTypes.bool
    }
  });

const map_state_to_props = ({query, weather_data}) => ({
  city_data: weather_data.get('city_data').toObject(),
  forecast_items: weather_data.get('forecast_items').toArray(),
  has_searched: query.get('has_searched', false)
});

const connected_weather_data_component =
  connect(map_state_to_props)(unconnected_weather_data_component);

export default connected_weather_data_component;
