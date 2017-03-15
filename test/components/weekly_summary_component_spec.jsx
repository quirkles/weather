/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';

import {unconnected_weekly_summary_component as WeeklySummary} from '../../src/components/weekly_summary';

describe('Weekly summary component', () => {
  it('Renders with no props, had the no-data class when given no data', () => {
    const wrapper = shallow(<WeeklySummary/>);
    expect(wrapper.find('.weekly-summary-pane.no-data')).to.have.length(1);
    expect(wrapper.find('.weekly-summary-pane.open')).to.have.length(0);
  });

  it('Accepts a weekly_data prop, does not have no-data class when given data', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    const wrapper = shallow(<WeeklySummary weekly_data={[{}, {}]}/>);
    expect(wrapper.find('.weekly-summary-pane.no-data')).to.have.length(0);
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
  });

  it('Accepts a weekly_data prop, warns of invalid proptype if data not an array', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    const wrapper = shallow(<WeeklySummary weekly_data='bad'/>);
    expect(wrapper.find('.weekly-summary-pane.no-data')).to.have.length(1);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });

  it('Accepts an is_open, rendered with open class if set to true', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    const wrapper = shallow(<WeeklySummary is_open={true}/>);
    expect(wrapper.find('.weekly-summary-pane.open')).to.have.length(1);
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
  });

  it('Accepts an is_open prop, warns of invalid proptype if is open is not a bool', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    const wrapper = shallow(<WeeklySummary is_open='bad'/>);
    expect(wrapper.find('.weekly-summary-pane.open')).to.have.length(0);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });

  it('Accepts a toggle_weekly_summary callback as a prop, no warning if function, called if toggler or overlay clicked', () => {
    const error_spy = spy();
    const toggle_spy = spy();
    stub(console, 'error', error_spy);
    const wrapper = shallow(<WeeklySummary toggle_weekly_summary={toggle_spy}/>);
    wrapper.find('.weekly-summary-component .weekly-summary-toggler').simulate('click');
    wrapper.find('.weekly-summary-component .weekly-summary-overlay').simulate('click');
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
    expect(toggle_spy.callCount).to.equal(2);
  });

  it('Accepts a toggle_weekly_summary callback as a prop, warning if not function', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    shallow(<WeeklySummary toggle_weekly_summary='bad'/>);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });
});
