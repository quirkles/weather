import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classnames from 'classnames';

import noop from '../../utils/func_utils';

import {toggle_weekly_summary as do_toggle} from '../../actions/weather_data_actions';

import './weekly_summary.scss';

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
  weekly_data: weather_data.get('forecast_items').toArray(),
  is_open: weather_data.get('is_weekly_summary_open', false)
});

const map_dispatch_to_props = dispatch => ({
  toggle_weekly_summary: bindActionCreators(do_toggle, dispatch)
});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_weekly_summary_component);
