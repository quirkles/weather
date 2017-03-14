import React from 'react';

export const unconnected_searchbox_component = ({
  query = ''
}) =>
  <div>
    <input
      type='text'
      value={query}
      className='searchbox'
    />
  </div>;

export default unconnected_searchbox_component;
