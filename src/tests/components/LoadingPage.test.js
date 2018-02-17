import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage, { Header } from '../../components/LoadingPage';

test('should render LoadingPage correctly', () => {
  const wrapper = shallow(<LoadingPage/>);
  expect(wrapper).toMatchSnapshot();
});