import {get} from 'axios';

const API_KEY = '6f36dc931b4dce3e8d01cd1b72ccc22a';
const URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';

export const fetch_forecast_for_city = ({city, units = 'metric'}) =>
  get(`${URL}?q=${city}&units=${units}&cnt=7&APPID=${API_KEY}`);
