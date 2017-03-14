/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';

import {unconnected_searchbox_component as SearchBox} from '../../src/components/searchbox';

const fake_onchange_event_with_value = value => ({
  target: {
    value
  }
});

describe('Layout Component', () => {
  it('renders with no props, default query is empty string', () =>{
    const wrapper = shallow(<SearchBox/>);
    expect(wrapper.find('input.searchbox')).to.have.length(1);
    expect(wrapper.find('input.searchbox').props().value).to.equal('');
  });

  it('renders with a query string, input value is set to query', () =>{
    const wrapper = shallow(<SearchBox query_search_string='Toronto'/>);
    expect(wrapper.find('input.searchbox')).to.have.length(1);
    expect(wrapper.find('input.searchbox').props().value).to.equal('Toronto');
  });

  it('Throws an error when trying to render with incorrect type for query prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox query_search_string = {false}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });

  it('Doesn\'t Throw an error when rendering with correct type for query prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox query_search_string = 'jhghjgjhg'/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
  });

  it('executes a handle searchbox change callback when the input changes', () => {
    const handle_searchbox_change = spy();
    const wrapper = shallow(<SearchBox query_search_string = 'Toronto' handle_searchbox_change={handle_searchbox_change}/>);
    wrapper.find('input.searchbox').simulate('change', fake_onchange_event_with_value(''));
    expect(handle_searchbox_change.callCount).to.equal(1);
  });

  it('Throws an error when trying to render with incorrect type for handle_searchbox_change prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox handle_searchbox_change = {false}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });

  it('Doesn\'t Throw an error when rendering with correct type for query prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox update_query_search_string = {() => {}}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
  });
});
