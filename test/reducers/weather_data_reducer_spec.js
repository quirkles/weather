/*eslint-env node, mocha */

import {Map, List} from 'immutable';
import {expect} from 'chai';

import weather_item_reducer from '../../src/reducers/weather_data_reducer';

describe('Weather Item Reducer', () => {
  it('Sets state to default if given null as initial state and no action', () => {
    const expected_final_state = Map({
      forecast_items: List([]),
      city_data: Map({})
    });
    expect(weather_item_reducer()).to.equal(expected_final_state);
  });
});
