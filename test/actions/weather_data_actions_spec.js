/*eslint-env node, mocha */

import {expect} from 'chai';

import {
  toggle_weekly_summary
} from '../../src/actions/weather_data_actions';

import {
  TOGGLE_WEEKLY_SUMMARY
} from '../../src/constants/weather_data_constants';

describe('Query Actions', () => {
  it('toggle weekly summary action returns an object with the correct type and payload', () => {
    const expected_action = {
      type: TOGGLE_WEEKLY_SUMMARY
    };

    const actual_action = toggle_weekly_summary();

    expect(expected_action).to.eql(actual_action);
  });
});
