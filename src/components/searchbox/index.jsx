import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {update_query_search_string} from '../../actions/query_actions';
import {fetch_forecast_for_city} from '../../actions/weather_data_actions';

import {noop} from '../../utils/func_utils';

export const unconnected_searchbox_component = Object.assign(
  ({
    query_search_string = '',
    handle_searchbox_change = noop,
    search_for_city_on_click = () => noop,
    search_for_city_on_press_enter = () => noop
  }) =>
    <div className='searchbox-component'>
      <input
        type = 'text'
        value = {query_search_string}
        onChange = {handle_searchbox_change}
        onKeyUp = {search_for_city_on_press_enter.apply ? search_for_city_on_press_enter(query_search_string) : noop}
        className = 'searchbox'
      />
      <button
        className="submit"
        onClick={search_for_city_on_click.apply ? search_for_city_on_click(query_search_string) : noop}
      >Search</button>
    </div>,
  {
    propTypes: {
      query_search_string: PropTypes.string,
      handle_searchbox_change: PropTypes.func,
      search_for_city_on_click: PropTypes.func,
      search_for_city_on_press_enter: PropTypes.func
    }
  });


  const map_state_to_props = ({query}) => ({
    query_search_string: query.get('search_string')
  });

  const map_dispatch_to_props = dispatch => {
    const update_query_search_string_action = bindActionCreators(update_query_search_string, dispatch);
    const fetch_forecast_for_city_action = bindActionCreators(fetch_forecast_for_city, dispatch);
    return {
      handle_searchbox_change: e => update_query_search_string_action(e.target.value),
      search_for_city_on_click: city => () => fetch_forecast_for_city_action({city}),
      search_for_city_on_press_enter: city => e => e.which === 13 && fetch_forecast_for_city_action({city})
    };
  };

const connected_searchbox_component =
  connect(map_state_to_props, map_dispatch_to_props)(unconnected_searchbox_component);

export default connected_searchbox_component;
