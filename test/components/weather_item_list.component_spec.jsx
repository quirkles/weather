/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';

import {unconnected_weather_data_component as WeatherData} from '../../src/components/weather_data';
import NoResults from '../../src/components/weather_data/no_results';
import WeatherItem from '../../src/components/weather_data/weather_item';

describe('Weather List Component', () => {
  it('renders with no props, default list is empty, shows no results component', () =>{
    const wrapper = shallow(<WeatherData/>);
    expect(wrapper.find(NoResults)).to.have.length(1);
    expect(wrapper.find(WeatherItem)).to.have.length(0);
  });

  it('accepts a list of weather items, renders them all, no results isnt rendered', () =>{
    const wrapper = shallow(<WeatherData weather_items={[{}, {}]}/>);
    expect(wrapper.find(NoResults)).to.have.length(0);
    expect(wrapper.find(WeatherItem)).to.have.length(2);
  });

  it('doesn\'t of invalid propTypes if weather items is an array', () =>{
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<WeatherData weather_items={[{}, {}]}/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
  });

  it('warns of invalid propTypes if weather items is not an array', () =>{
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<WeatherData weather_items='items'/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });
});
