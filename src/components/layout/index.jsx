import React from 'react';

import SearchBox from '../searchbox';
import WeatherData from '../weather_data';

import './layout.scss';

const layout = () =>
  <div>
    <SearchBox/>
    <WeatherData/>
  </div>;

export default layout;
