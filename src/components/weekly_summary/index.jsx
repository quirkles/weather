import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {format, fromTime} from 'date-fp';

import classnames from 'classnames';

import noop from '../../utils/func_utils';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import {toggle_weekly_summary as do_toggle} from '../../actions/weather_data_actions';

import './weekly_summary.scss';

const get_temp_data_from_weekly_data = weekly_data => weekly_data.map(({temp, dt}) => ({
    day: format('ddd', fromTime(dt * 1000)),
    'day-temp': temp.day,
    'temp-max': temp.max,
    'temp-min': temp.min
  }));

const get_pressure_data_from_weekly_data = weekly_data => weekly_data.map(({pressure, dt}) => ({
    day: format('ddd', fromTime(dt * 1000)),
    pressure
  }));

const get_humidity_data_from_weekly_data = weekly_data => weekly_data.map(({humidity, dt}) => ({
    day: format('ddd', fromTime(dt * 1000)),
    humidity
  }));

export const unconnected_weekly_summary_component = Object.assign(
  ({
    weekly_data = null,
    is_open = false,
    toggle_weekly_summary = noop
  }) =>
  <div className='weekly-summary-component'>
    <div
      className={classnames(
        'weekly-summary-pane bg-warning', {
           'open': is_open === true,
           'no-data': !(weekly_data && weekly_data.length && weekly_data.map)
         })}
    >
      <div className="charts-wrapper">
        <div className='row'>
          <div className="col-lg-6 col-md-12 info-pane">
            <h2>Weekly Temperature Chart</h2>
            <p>High: {weekly_data.reduce((highest, current) => Math.max(highest, current.temp.max), Number.NEGATIVE_INFINITY)}</p>
            <p>Low: {weekly_data.reduce((lowest, current) => Math.min(lowest, current.temp.min), Number.POSITIVE_INFINITY)}</p>
            <p>Average: {weekly_data.reduce((total, current) => total + (current.temp.max - current.temp.min), 0) / weekly_data.length}</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <LineChart
              width={600}
              height={250}
              data={get_temp_data_from_weekly_data(weekly_data)}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis dataKey="day"/>
              <YAxis/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="day-temp" stroke="#4BC0C0"/>
              <Line type="monotone" dataKey="temp-min" stroke="#2196f3"/>
              <Line type="monotone" dataKey="temp-max" stroke="#ef193c"/>
            </LineChart>
          </div>
          <div className="col-lg-6 col-md-12 info-pane">
            <h2>Weekly Pressure Chart</h2>
            <p>Average: {weekly_data.reduce((total, current) => total + current.pressure, 0) / weekly_data.length} hPa</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <LineChart
              width={600}
              height={250}
              data={get_pressure_data_from_weekly_data(weekly_data)}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis dataKey="day"/>
              <YAxis/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="pressure" stroke="#4BC0C0"/>
            </LineChart>
          </div>
           <div className="col-lg-6 col-md-12 info-pane">
            <h2>Weekly Humidity Chart</h2>
            <p>Average: {weekly_data.reduce((total, current) => total + current.humidity, 0) / weekly_data.length} %</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <LineChart
              width={600}
              height={250}
              data={get_humidity_data_from_weekly_data(weekly_data)}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis dataKey="day"/>
              <YAxis/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="humidity" stroke="#4BC0C0"/>
            </LineChart>
          </div>
        </div>
      </div>
      <div
        className='weekly-summary-toggler serif bg-warning'
        onClick={toggle_weekly_summary}
      >
        {is_open === true ? 'X' : '^'}
      </div>
    </div>
    <div
      className='weekly-summary-overlay'
      onClick={toggle_weekly_summary}
    ></div>
  </div>,
  {
    propTypes: {
      weekly_data: PropTypes.array,
      is_open: PropTypes.bool,
      toggle_weekly_summary: PropTypes.func
    }
  });

const map_state_to_props = ({weather_data}) => ({
  weekly_data: weather_data.get('forecast_items').toJS(),
  is_open: weather_data.get('is_weekly_summary_open', false)
});

const map_dispatch_to_props = dispatch => ({
  toggle_weekly_summary: bindActionCreators(do_toggle, dispatch)
});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_weekly_summary_component);
