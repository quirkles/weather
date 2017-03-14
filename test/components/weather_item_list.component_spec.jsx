/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';

import {unconnected_weather_item_list_component as WeatherItemList} from '../../src/components/weather_item_list';
import NoResults from '../../src/components/weather_item_list/no_results';
import WeatherItem from '../../src/components/weather_item_list/weather_item';

describe('Weather List Component', () => {
  it('renders with no props, default list is empty, shows no results component', () =>{
    const wrapper = shallow(<WeatherItemList/>);
    expect(wrapper.find(NoResults)).to.have.length(1);
    expect(wrapper.find(WeatherItem)).to.have.length(0);
  });
});
