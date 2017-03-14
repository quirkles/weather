import React, {PropTypes} from 'react';

import {noop} from '../../utils/func_utils';

const unconnected_searchbox_component = Object.assign(
  ({
  query = '',
  edit_query = noop
  }) =>
    <div>
      <input
        type='text'
        value={query}
        onChange = {edit_query}
        className='searchbox'
      />
    </div>,
  {
    propTypes: {
      query: PropTypes.string,
      edit_query: PropTypes.func
    }
  });

export default unconnected_searchbox_component;
