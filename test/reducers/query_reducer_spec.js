/*eslint-env node, mocha */

import {Map} from 'immutable';
import {expect} from 'chai';

import query_reducer from '../../src/reducers/query_reducer';

describe('Query Reducer', () => {
  it('Sets state to default if given null as initial state and no action', () => {
    expect(query_reducer()).to.equal(Map({
      'search_string': ''
    }));
  });

  it('Doesn\'t change state given unkown action type');
});
