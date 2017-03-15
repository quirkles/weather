import React, {PropTypes} from 'react';
import NoResults from './no_results';
import WeatherItem from './weather_item';

export const unconnected_weather_data_component = Object.assign(
  ({
    weather_items = []
  }) =>
    weather_items.map && weather_items.length ?
      <div>
        {weather_items.map(weather_item => <WeatherItem weather_item={weather_item}/>)}
      </div> :
      <NoResults/>,
  {
    propTypes: {
      weather_items: PropTypes.array
    }
  });

export default unconnected_weather_data_component;
