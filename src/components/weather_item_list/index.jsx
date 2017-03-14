import React from 'react';
import NoResults from './no_results';
import WeatherItem from './weather_item';

export const unconnected_weather_item_list_component = ({
  weather_items = []
}) =>
  weather_items.length ?
    weather_items.map(weather_item => <WeatherItem weather_item={weather_item}/>) :
    <NoResults/>;

export default unconnected_weather_item_list_component;
