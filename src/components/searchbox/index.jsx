import React, {PropTypes} from 'react';

import {noop} from '../../utils/func_utils';

const unconnected_searchbox_component = Object.assign(
  ({
  query = '',
  update_query_search_string = noop
  }) =>
    <div>
      <input
        type='text'
        value={query}
        onChange = {update_query_search_string}
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
