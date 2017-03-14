/* eslint-env  mocha */

import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';

import SearchBox from '../../src/components/searchbox';

describe('Layout Component', () => {
  it('renders with no props, default query is empty string', () =>{
    const wrapper = shallow(<SearchBox/>);
    expect(wrapper.find('input.searchbox')).to.have.length(1);
    expect(wrapper.find('input.searchbox').props().value).to.equal('');
  });
});
