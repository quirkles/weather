/* eslint-env  mocha */

import React from 'react';
import {Map} from 'immutable';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';

import {unconnected_weather_data_component as WeatherData} from '../../src/components/weather_data';
import NoResults from '../../src/components/weather_data/no_results';
import NotSearched from '../../src/components/weather_data/not_searched';
import ForecastItem from '../../src/components/weather_data/forecast_item';
import WeatherDataHeader from '../../src/components/weather_data/weather_data_header';

describe('Weather List', () => {
  describe('Root Component', () => {
    it('renders with no props, default list is empty, shows not searched results component', () =>{
      const wrapper = shallow(<WeatherData/>);
      expect(wrapper.find(NotSearched)).to.have.length(1);
      expect(wrapper.find(NoResults)).to.have.length(0);
      expect(wrapper.find(ForecastItem)).to.have.length(0);
      expect(wrapper.find(WeatherDataHeader)).to.have.length(0);
    });

    it('renders with no items, default list is empty, shows no results if has_searched is true', () =>{
      const wrapper = shallow(<WeatherData has_searched={true}/>);
      expect(wrapper.find(NotSearched)).to.have.length(0);
      expect(wrapper.find(NoResults)).to.have.length(1);
      expect(wrapper.find(ForecastItem)).to.have.length(0);
      expect(wrapper.find(WeatherDataHeader)).to.have.length(0);
    });

    it('accepts a list of weather items, renders them all, no results isnt rendered', () =>{
      const wrapper = shallow(<WeatherData forecast_items={[Map({}), Map({})]}/>);
      expect(wrapper.find(NoResults)).to.have.length(0);
      expect(wrapper.find(NotSearched)).to.have.length(0);
      expect(wrapper.find(ForecastItem)).to.have.length(2);
      expect(wrapper.find(WeatherDataHeader)).to.have.length(1);
    });

    it('accepts an has_searched boolean, no proptype warning', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherData has_searched={true}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('warns of invalid propTypes if has_searched is not a boolean', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherData has_searched='no good'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
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

    it('doesn\'t warn of invalid propTypes if forecast_items is an array', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherData forecast_items={[Map({}), Map({})]}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('warns of invalid propTypes if forecast_items is not an array', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherData forecast_items='items'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });
  });

  describe('No Results component', () => {
    it('Renders ok, with header, no props', () => {
      const wrapper = shallow(<NoResults/>);
      expect(wrapper.find('.no-results-component h2')).to.have.length(1);
    });

    it('warns of invalid propTypes if query_search_string is not a string', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<NoResults query_search_string={76868}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });

    it('doesn\'t warn of invalid propTypes if query_search_string is string', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<NoResults query_search_string='good'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });
  });

  describe('Weather data header', () => {
    it('Returns null if passed no props', () => {
      const wrapper = shallow(<WeatherDataHeader/>);
      expect(wrapper.children()).to.have.length(0);
    });

    it('Renders properly when given city and country', () => {
      const wrapper = shallow(<WeatherDataHeader city_name='Toronto' country_code='CA'/>);
      expect(wrapper.find('h2')).to.have.length(1);
      expect(wrapper.find('h2').text().trim()).to.have.equal('Showing forecast for Toronto: CA');
    });

    it('warns of invalid propTypes if city_name is not an array', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherDataHeader city_name={false}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });

    it('doesn\'t warn of invalid propTypes if city_name is string', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherDataHeader city_name='good'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('doesn\'t warn of invalid propTypes if country_code is string', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<WeatherDataHeader country_code='good'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });
  });

  describe('forecast item', ()=> {
    it('Renders with no prop data', () => {
      const wrapper = shallow(<ForecastItem/>);
      expect(wrapper.find('.forecast-item-component')).to.have.length(1);
    });

    it('doesn\'t warn of invalid propTypes if summary is a string', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem summary='good'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('warns of invalid propTypes if summary is not a string', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem summary={false}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });

    it('doesn\'t warn of invalid propTypes if date_string is a string', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem date_string='good'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('warns of invalid propTypes if date_string is not a string', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem date_string={false}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });

    it('doesn\'t warn of invalid propTypes if temp is a number', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem temp={44.0}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('warns of invalid propTypes if temp is not a number', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem temp='bad'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });

    it('doesn\'t warn of invalid propTypes if humidity is a number', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem humidity={44.0}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('warns of invalid propTypes if humidity is not a number', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem humidity='bad'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });

    it('doesn\'t warn of invalid propTypes if air_pressure is a number', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem air_pressure={44.0}/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(0);
    });

    it('warns of invalid propTypes if air_pressure is not a number', () =>{
      const error_spy = spy();
      stub(console, 'error', error_spy);
      shallow(<ForecastItem air_pressure='bad'/>);
      console.error.restore();
      expect(error_spy.callCount).to.equal(1);
    });
  });
});
