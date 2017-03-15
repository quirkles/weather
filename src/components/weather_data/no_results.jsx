import React, {PropTypes} from 'react';

export default Object.assign(
  ({
    query_search_string = null
  }) =>
    <div className='no-results-component'>
      <h2 className='serif'>No results found for query: {query_search_string || 'No Query'}</h2>
    </div>,
  {
    propTypes: {
      query_search_string: PropTypes.string
    }
  });
