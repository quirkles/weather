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

const fake_enter_keypress = () => ({which: 13});

describe('Searchbox Component', () => {
  it('renders with no props, default query is empty string', () =>{
    const wrapper = shallow(<SearchBox/>);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('.submit')).to.have.length(1);
    expect(wrapper.find('input').props().value).to.equal('');
  });

  it('renders with a query string, input value is set to query', () =>{
    const wrapper = shallow(<SearchBox query_search_string='Toronto'/>);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('input').props().value).to.equal('Toronto');
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
    wrapper.find('input').simulate('change', fake_onchange_event_with_value(''));
    expect(handle_searchbox_change.callCount).to.equal(1);
  });

  it('Throws an error when trying to render with incorrect type for handle_searchbox_change prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox handle_searchbox_change = {false}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });

  it('Doesn\'t throw an error when rendering with correct type for handle_searchbox_change prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox handle_searchbox_change = {() => {}}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
  });

  it('executes an search for city callback when the submit button is clicked', () => {
    const search_for_city_on_click = spy();
    const wrapper = shallow(<SearchBox search_for_city_on_click={search_for_city_on_click}/>);
    wrapper.find('input').simulate('click', fake_onchange_event_with_value(''));
    expect(search_for_city_on_click.callCount).to.equal(1);
  });

  it('Throws an error when trying to render with incorrect type for search_for_city_on_click prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox search_for_city_on_click = {false}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });

  it('Doesn\'t throw an error when rendering with correct type for search_for_city_on_click prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox search_for_city_on_click = {() => {}}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
  });

  it('executes a search for city on press enter callback when enter is typed into the search bar', () => {
    const search_for_city_on_press_enter = spy();
    const wrapper = shallow(<SearchBox search_for_city_on_press_enter={search_for_city_on_press_enter}/>);
    wrapper.find('input').simulate('click', fake_enter_keypress());
    expect(search_for_city_on_press_enter.callCount).to.equal(1);
  });

  it('Throws an error when trying to render with incorrect type for search_for_city_on_press_enter prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox search_for_city_on_press_enter = {false}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });

  it('Doesn\'t throw an error when rendering with correct type for search_for_city_on_press_enter prop', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<SearchBox search_for_city_on_press_enter = {() => {}}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
  });
});
