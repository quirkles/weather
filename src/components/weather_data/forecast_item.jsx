import React, {PropTypes} from 'react';

export default Object.assign(
  ({
    summary = null,
    date_string = null,
    temp = null,
    humidity = null,
    air_pressure = null
  }) =>
    <div className = 'forecast-item'>
      <div>{summary || 'No description available'}</div>
      <div>{date_string || 'Unkown Date'}</div>
      <div>{temp || 'N/A'}C</div>
      <div>Air Pressure: {air_pressure || 'N/A'}hPa</div>
      <div>Humidity: {humidity || 'N/A'}%</div>
    </div>,
  {
    propTypes: {
      summary: PropTypes.string,
      date_string: PropTypes.string,
      temp: PropTypes.number,
      humidity: PropTypes.number,
      air_pressure: PropTypes.number
    }
  });
