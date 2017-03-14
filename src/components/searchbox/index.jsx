import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

// import {update_query_search_string} from '../../actions/query_actions';

import {noop} from '../../utils/func_utils';

export const unconnected_searchbox_component = Object.assign(
  ({
  query_search_string = '',
  update_query_search_string = noop
  }) =>
    <div>
      <input
        type='text'
        value={query_search_string}
        onChange = {update_query_search_string}
        className='searchbox'
      />
    </div>,
  {
    propTypes: {
      query_search_string: PropTypes.string,
      update_query_search_string: PropTypes.func
    }
  });


  const map_state_to_props = ({query}) => ({
    query_search_string: query.get('search_string')
  });

  // const map_dispatch_to_props = dispatch => ({
  //   update_query_search_string: bindActionCreators(update_query_search_string, dispatch)
  // });

const connected_searchbox_component = connect(map_state_to_props)(unconnected_searchbox_component);

export default connected_searchbox_component;
