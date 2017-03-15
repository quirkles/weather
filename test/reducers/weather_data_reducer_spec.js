/*eslint-env node, mocha */

import {Map, List} from 'immutable';
import {expect} from 'chai';

import weather_data_reducer from '../../src/reducers/weather_data_reducer';

import {HANDLE_GET_FORECAST_RESPONSE} from '../../src/constants/weather_data_constants';

describe('Weather Item Reducer', () => {
  it('Sets state to default if given null as initial state and no action', () => {
    const expected_final_state = Map({
      forecast_items: List([]),
      city_data: Map({})
    });
    expect(weather_data_reducer()).to.equal(expected_final_state);
  });

  it('Doesnt affect a state given no action', () => {
    const initial_state = Map({
      forecast_items: List(['one', 'two']),
      city_data: Map({
        name: 'Toronto'
      })
    });

    const expected_final_state = Map({
      forecast_items: List(['one', 'two']),
      city_data: Map({
        name: 'Toronto'
      })
    });

    expect(weather_data_reducer(initial_state)).to.equal(expected_final_state);
  });

  it('Doesnt affect a state given an unkown action', () => {
    const initial_state = Map({
      forecast_items: List(['one', 'two']),
      city_data: Map({
        name: 'Toronto'
      })
    });

    const expected_final_state = Map({
      forecast_items: List(['one', 'two']),
      city_data: Map({
        name: 'Toronto'
      })
    });

    const action = {
      type: 'this action type doesnt exist and never will, so dont go making an action of this type or this test will break eh?'
    };

    expect(weather_data_reducer(initial_state, action)).to.equal(expected_final_state);
  });

  it('Action of type HANDLE_GET_FORECAST_RESPONSE will set both the city data and the forcast item list', () => {
    const initial_state = Map({
      forecast_items: List([]),
      city_data: Map({})
    });

    const expected_final_state = Map({
      forecast_items: List(['one', 'two']),
      city_data: Map({
        name: 'Toronto'
      })
    });

    const action = {
      type: HANDLE_GET_FORECAST_RESPONSE,
      forecast_items: ['one', 'two'],
      city_data: {
        name: 'Toronto'
      }
    };

    expect(weather_data_reducer(initial_state, action)).to.equal(expected_final_state);
  });
});
