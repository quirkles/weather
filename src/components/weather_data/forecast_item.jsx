import React, {PropTypes} from 'react';

const get_color_class_from_weather_icon = weather_icon => {
  return ({
    '01d': 'warning',
    '02d': 'warning',
    '03d': 'info',
    '04d': 'info',
    '09d': 'info',
    '10d': 'info',
    '11d': 'danger',
    '13d': 'primary',
    '50d': 'primary'
  }[weather_icon || 'mist']);
};

const get_icon_class_from_weather_icon = weather_icon => {
  return ({
    '01d': 'wi-day-sunny',
    '02d': 'wi-day-sunny-overcast',
    '03d': 'wi-day-cloudy',
    '04d': 'wi-cloudy',
    '09d': 'wi-showers',
    '10d': 'wi-rain',
    '11d': 'wi-thunderstorm',
    '13d': 'wi-snow',
    '50d': 'wi-fog'
  }[weather_icon || 'mist']);
};

export default Object.assign(
  ({
    summary = null,
    date_string = null,
    temp = null,
    humidity = null,
    air_pressure = null,
    weather_icon = null
  }) =>
  <div className="col-xl-4 col-lg-6 col-md-12 forecast-item-component">
    <div>
      <div className={`header-container bg-${get_color_class_from_weather_icon(weather_icon)}`}></div>
      <div className="summary-container">
        <i className={`weather-icon text-${get_color_class_from_weather_icon(weather_icon)} wi ${get_icon_class_from_weather_icon(weather_icon)}`}></i>
        <p>
          {summary || 'No description available'}
        </p>
        <small>
          {date_string || 'Unkown Date'}
        </small>
      </div>
      <div className={`row bg-${get_color_class_from_weather_icon(weather_icon)}`}>
        <div className="col-xs-12 col-sm-4 b-r">
          <a className="p-y block text-center">
            <strong className="block">{humidity || humidity === 0 ? humidity : 'N/A'} %</strong>
            <span className="block">Humidity</span>
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 b-r">
          <a>
            <strong>{temp || 'N/A'} C</strong>
            <span>Temperature</span>
          </a>
        </div>
        <div className="col-xs-12 col-sm-4">
          <a>
            <strong>{air_pressure || 'N/A'} hPa</strong>
            <span>Air pressure</span>
          </a>
        </div>
      </div>
    </div>
  </div>,
  {
    propTypes: {
      summary: PropTypes.string,
      date_string: PropTypes.string,
      temp: PropTypes.number,
      humidity: PropTypes.number,
      air_pressure: PropTypes.number,
      weather_icon: PropTypes.string
    }
  });
