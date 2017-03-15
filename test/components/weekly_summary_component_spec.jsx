/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';

import WeeklySummary from '../../src/components/weekly_summary';

describe('Weekly summary component', () => {
  it('Renders with no props, had the no-data class when given no data', () => {
    const wrapper = shallow(<WeeklySummary/>);
    expect(wrapper.find('.weekly-summary-component.no-data')).to.have.length(1);
  });

  it('Accepts a weekly_data prop, does not have no-data class when given data', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    const wrapper = shallow(<WeeklySummary weekly_data={[{}, {}]}/>);
    expect(wrapper.find('.weekly-summary-component.no-data')).to.have.length(0);
    console.error.restore();
    expect(error_spy.callCount).to.equal(0);
  });

  it('Accepts a weekly_data prop, warns of invalid proptype if data not an array', () => {
    const error_spy = spy();
    stub(console, 'error', error_spy);
    const wrapper = shallow(<WeeklySummary weekly_data='bad'/>);
    expect(wrapper.find('.weekly-summary-component.no-data')).to.have.length(1);
    console.error.restore();
    expect(error_spy.callCount).to.equal(1);
  });
});
