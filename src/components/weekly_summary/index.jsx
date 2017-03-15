import React, {PropTypes} from 'react';

import './weekly_summary.scss';

export default Object.assign(
  ({
    weekly_data = [1,3,3]
  }) =>
    <div
      className={`weekly-summary-component ${weekly_data && weekly_data.length && weekly_data.map ? '' : 'no-data'}`}
    >
      <div className='weekly-summary-toggler'>UP</div>
    </div>,
  {
    propTypes: {
      weekly_data: PropTypes.array
    }
  });
