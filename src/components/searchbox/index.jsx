import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {update_query_search_string} from '../../actions/query_actions';
import {fetch_forecast_for_city} from '../../actions/weather_data_actions';

import {noop} from '../../utils/func_utils';

export const unconnected_searchbox_component = Object.assign(
  ({
  query_search_string = '',
  handle_searchbox_change = noop
  }) =>
    <div>
      <input
        type='text'
        value={query_search_string}
        onChange = {handle_searchbox_change}
        className='searchbox'
      />
    </div>,
  {
    propTypes: {
      query_search_string: PropTypes.string,
      handle_searchbox_change: PropTypes.func
    }
  });


  const map_state_to_props = ({query}) => ({
    query_search_string: query.get('search_string')
  });

  const map_dispatch_to_props = dispatch => {
    const update_query_search_string_action = bindActionCreators(update_query_search_string, dispatch);
    const fetch_forecast_for_city_action = bindActionCreators(fetch_forecast_for_city, dispatch);
    return {
      handle_searchbox_change: e => {
        const search_string = e.target.value;
        update_query_search_string_action(search_string);
        if (search_string.length){
          fetch_forecast_for_city_action({city: search_string});
        }
      }
    };
  };

const connected_searchbox_component =
  connect(map_state_to_props, map_dispatch_to_props)(unconnected_searchbox_component);

export default connected_searchbox_component;
