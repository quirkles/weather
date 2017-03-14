import React, {PropTypes} from 'react';

const unconnected_searchbox_component = Object.assign(
  ({
  query = ''
  }) =>
    <div>
      <input
        type='text'
        value={query}
        className='searchbox'
      />
    </div>,
  {
    propTypes: {
      query: PropTypes.string
    }
  });

export default unconnected_searchbox_component;
