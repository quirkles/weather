import React, {PropTypes} from 'react';

const get_color_class_from_weather_icon = weather_icon => {
  return ({
    '01': 'warning',
    '02': 'warning',
    '03': 'info',
    '04': 'info',
    '09': 'info',
    '10': 'info',
    '11': 'danger',
    '13': 'primary',
    '50': 'primary'
  }[weather_icon.substring(0, 2)]);
};

const get_icon_class_from_weather_icon = weather_icon => {
  return ({
    '01': 'wi-day-sunny',
    '02': 'wi-day-sunny-overcast',
    '03': 'wi-day-cloudy',
    '04': 'wi-cloudy',
    '09': 'wi-showers',
    '10': 'wi-rain',
    '11': 'wi-thunderstorm',
    '13': 'wi-snow',
    '50': 'wi-fog'
  }[weather_icon.substring(0, 2)]);
};

export default Object.assign(
  ({
    summary = null,
    day_string = null,
    date_string = null,
    temp_day = null,
    temp_min = null,
    temp_max = null,
    humidity = null,
    air_pressure = null,
    weather_icon = ''
  }) =>
  <div className="col-xl-4 col-lg-6 col-md-12 forecast-item-component">
    <div>
      <div className={`header-container bg-${get_color_class_from_weather_icon(weather_icon)}`}></div>
      <div className="summary-container">
        <div className='min-temp'>
          <p>
            <span className={`text-${get_color_class_from_weather_icon(weather_icon)}`}>{temp_min}C</span>
            Min
          </p>
        </div>
        <i
          className={`weather-icon text-${get_color_class_from_weather_icon(weather_icon)} wi ${get_icon_class_from_weather_icon(weather_icon)}`}
        />
        <div className='max-temp'>
          <p>
            <span className={`text-${get_color_class_from_weather_icon(weather_icon)}`}>{temp_max}C</span>
            Max
          </p>
        </div>
        <p>
          {summary || 'No description available'}
        </p>
        <strong className={`text-${get_color_class_from_weather_icon(weather_icon)}`}>
          {day_string || 'Unknown Day'}
        </strong>
        <small>
          {date_string || 'Unkown Date'}
        </small>
      </div>
      <div className={`row bg-${get_color_class_from_weather_icon(weather_icon)}`}>
        <div className="col-xs-12 col-sm-4 b-r">
          <a className="p-y block text-center">
            <strong className="block">{humidity || humidity === 0 ? humidity : 'N/A'} <span>%</span></strong>
            <span className="block">Humidity</span>
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 b-r">
          <a>
            <strong>{temp_day || 'N/A'} <span>C</span></strong>
            <span>Temperature</span>
          </a>
        </div>
        <div className="col-xs-12 col-sm-4">
          <a>
            <strong>{air_pressure || 'N/A'} <span>hPa</span></strong>
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
