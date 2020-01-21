import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']"); 
  expect(appComponent ).toHaveLength(1);
});

it('renders an increment button', () => {

});

it('renders a counter display', () => {

});

describe('counter display', () => {
  it('starts at zero', () => {

  });
});

describe('controls', () => {
  describe('increment button', () => {
    it('increases the number on the counter display by one', () => {

    });
  });
});
