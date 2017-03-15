import React, {PropTypes} from 'react';
import classnames from 'classnames';

import noop from '../../utils/func_utils';

import './weekly_summary.scss';

export default Object.assign(
  ({
    weekly_data = null,
    is_open = false,
    toggle_weekly_summary = noop
  }) =>
  <div className='weekly-summary-component'>
    <div
      className={classnames(
        'weekly-summary-pane', {
           'open': is_open === true,
           'no-data': !(weekly_data && weekly_data.length && weekly_data.map)
         })}
    >
      <div
        className='weekly-summary-toggler serif'
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
