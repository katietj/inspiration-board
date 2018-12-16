import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';

describe('Board', () => {

it('will match the Board Snapshot', () => {
const wrapper = shallow(<Board
  url = "string"
  boardName = "string"
  />);
  expect(wrapper).toMatchSnapshot();

});
});
