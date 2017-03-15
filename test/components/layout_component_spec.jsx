/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';

import Layout from '../../src/components/layout';
import SearchBox from '../../src/components/searchbox';
import WeatherData from '../../src/components/weather_data';
import WeeklySummary from '../../src/components/weekly_summary';

describe('Layout Component', () => {
  const wrapper = shallow(<Layout/>);
  it('renders, contains a searchbox and a weather item list', () => {
    expect(wrapper.find(SearchBox)).to.have.length(1);
    expect(wrapper.find(WeatherData)).to.have.length(1);
    expect(wrapper.find(WeeklySummary)).to.have.length(1);
  });
});
