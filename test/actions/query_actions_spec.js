/*eslint-env node, mocha */

import {Map} from 'immutable';
import {expect} from 'chai';

import {
  update_query_search_string
} from '../../src/actions/query_actions';

import {
  UPDATE_QUERY_SEARCH_STRING
} from '../../src/constants/query_constants';

describe('Query Actions', () => {
  it('update_query_search_string action returns an object with the correct type and payload', () => {
    const expected_action = {
      type: UPDATE_QUERY_SEARCH_STRING,
      search_string: 'Toronto'
    };

    const actual_action = update_query_search_string('Toronto');

    expect(expected_action).to.eql(actual_action);
  });
});
