/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';

import Layout from '../../src/components/layout';
import SearchBox from '../../src/components/searchbox';
import WeatherItemList from '../../src/components/weather_item_list';

describe('Layout Component', () => {
  const wrapper = shallow(<Layout/>);
  it('renders, contains a searchbox and a weather item list', () =>{
    expect(wrapper.find(SearchBox)).to.have.length(1);
    expect(wrapper.find(WeatherItemList)).to.have.length(1);
  });
});
