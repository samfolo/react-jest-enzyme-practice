import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from './testHelpers';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('<App />', () => {
  let wrapper;
  let appComponent;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  
  it('renders without crashing', () => {
    appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
  });
  
  it('renders an increment button', () => {
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    expect(incrementButton).toHaveLength(1);
  });
  
  it('renders a counter display', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay).toHaveLength(1);
  });
});
