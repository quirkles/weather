/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';

import SearchBox from '../../src/components/searchbox';

describe('Layout Component', () => {
  it('renders with no props, default query is empty string', () =>{
    const wrapper = shallow(<SearchBox/>);
    expect(wrapper.find('input.searchbox')).to.have.length(1);
    expect(wrapper.find('input.searchbox').props().value).to.equal('');
  });

  it('renders with a query string, input value is set to query', () =>{
    const wrapper = shallow(<SearchBox query='Toronto'/>);
    expect(wrapper.find('input.searchbox')).to.have.length(1);
    expect(wrapper.find('input.searchbox').props().value).to.equal('Toronto');
  });

  it('Throws an error when trying to render with incorrect type for query prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox query = {false}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });

  it('executes an edit query callback when the input changes', () => {
    const edit_query = spy();
    const wrapper = shallow(<SearchBox query = 'Toronto' edit_query={edit_query}/>);
    wrapper.find('input.searchbox').simulate('change');
    expect(edit_query.callCount).to.equal(1);
  });
});
