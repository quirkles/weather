import React from 'react';

import SearchBox from '../searchbox';
import WeatherData from '../weather_data';
import WeeklySummary from '../weekly_summary';

import './layout.scss';

const layout = () =>
  <div>
    <SearchBox/>
    <div className="weather-data-wrapper">
      <WeatherData/>
    </div>
    <WeeklySummary/>
  </div>;

export default layout;
