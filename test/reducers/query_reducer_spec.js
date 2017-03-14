/*eslint-env node, mocha */

import {Map} from 'immutable';
import {expect} from 'chai';

import {
  UPDATE_QUERY_SEARCH_STRING
} from '../../src/constants/query_constants';

import query_reducer from '../../src/reducers/query_reducer';

describe('Query Reducer', () => {
  it('Sets state to default if given null as initial state and no action', () => {
    const expected_final_state = Map({
      'search_string': ''
    });

    expect(query_reducer()).to.equal(expected_final_state);
  });

  it('Doesnt affect a state given no action', () => {
    const initial_state = Map({
      'search_string': 'Toronto'
    });

    const expected_final_state = Map({
      'search_string': 'Toronto'
    });

    expect(query_reducer(initial_state)).to.equal(expected_final_state);
  });

  it('Call with unknown action will not effect affect a state', () => {
    const initial_state = Map({
      'search_string': 'Toronto'
    });

    const action = {
      type: 'this action type doesnt exist and never will, so dont go making an action of this type or this test will break eh?'
    };

    const expected_final_state = Map({
      'search_string': 'Toronto'
    });

    expect(query_reducer(initial_state, action)).to.equal(expected_final_state);
  });

  it('Action of type update query search string will update the query search string', () => {
    const initial_state = Map({
      'search_string': 'Toronto'
    });

    const action = {
      type: UPDATE_QUERY_SEARCH_STRING,
      search_string: 'Winnipeg'
    };

    const expected_final_state = Map({
      'search_string': 'Winnipeg'
    });

    expect(query_reducer(initial_state, action)).to.equal(expected_final_state);
  });

  it('Action of type update query search string will update the query search string even if search_string is empty string', () => {
    const initial_state = Map({
      'search_string': 'Toronto'
    });

    const action = {
      type: UPDATE_QUERY_SEARCH_STRING,
      search_string: ''
    };

    const expected_final_state = Map({
      'search_string': ''
    });

    expect(query_reducer(initial_state, action)).to.equal(expected_final_state);
  });

  it('Action of type update query search string will not update the query search string if no new string is provided', () => {
    const initial_state = Map({
      'search_string': 'Toronto'
    });

    const action = {
      type: UPDATE_QUERY_SEARCH_STRING
    };

    const expected_final_state = Map({
      'search_string': 'Toronto'
    });

    expect(query_reducer(initial_state, action)).to.equal(expected_final_state);
  });
});
