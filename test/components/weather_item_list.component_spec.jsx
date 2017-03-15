/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';

import {unconnected_weather_data_component as WeatherData} from '../../src/components/weather_data';
import NoResults from '../../src/components/weather_data/no_results';
import ForecastItem from '../../src/components/weather_data/forecast_item';
import WeatherDataHeader from '../../src/components/weather_data/weather_data_header';

describe('Weather List', () => {
  describe('Root Component', () => {
    it('renders with no props, default list is empty, shows no results component', () =>{
      const wrapper = shallow(<WeatherData/>);
      expect(wrapper.find(NoResults)).to.have.length(1);
      expect(wrapper.find(ForecastItem)).to.have.length(0);
      expect(wrapper.find(WeatherDataHeader)).to.have.length(0);
    });

    it('accepts a list of weather items, renders them all, no results isnt rendered', () =>{
      const wrapper = shallow(<WeatherData forecast_items={[{}, {}]}/>);
      expect(wrapper.find(NoResults)).to.have.length(0);
      expect(wrapper.find(ForecastItem)).to.have.length(2);
      expect(wrapper.find(WeatherDataHeader)).to.have.length(1);
    });

    it('accepts a a city data object, no proptype warning', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherData city_data={{}}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('warns of invalid propTypes if city_data is not an object', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherData city_data='no good'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });

    it('doesn\'t warn of invalid propTypes if weather items is an array', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherData forecast_items={[{}, {}]}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('warns of invalid propTypes if weather items is not an array', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherData forecast_items='items'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });
  });

  describe('No Results component', () => {
    it('Renders ok, with header', () => {
      const wrapper = shallow(<NoResults/>);
      expect(wrapper.find('.no-results-component h2')).to.have.length(1);
    });
  });
});
