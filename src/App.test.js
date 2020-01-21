import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from './testHelpers';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('<App />', () => {
  let wrapper;
  let appComponent;

  beforeEach(() => {
    wrapper = setup(App);
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
  
  describe('counter display', () => {
    it('starts at zero', () => {
      const initialCounterState = wrapper.state('counter');
      expect(initialCounterState).toBe(0);
    });
  });
  
  describe('controls', () => {
    describe('increment button', () => {
      it('increases the number on the counter display by one', () => {
        let incrementButton = findByTestAttr(wrapper, 'increment-button');
        incrementButton.simulate('click');
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toEqual('Count is currently 1');
      });
    });

    describe('decrement button', () => {
      it('decreases the number on the counter display by one', () => {
        const counter = 6;
        wrapper = setup(App, {}, { counter });

        let decrementButton = findByTestAttr(wrapper, 'decrement-button');
        decrementButton.simulate('click');

        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toEqual('Count is currently 5');
      });

      it('renders an error message if the counter is at 0 before being clicked', () => {
        const counter = 0;
        const decrementButton =findByTestAttr(wrapper, 'decrement-button');
        decrementButton.simulate('click');

        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toEqual('Count is currently 0');
        expect(wrapper.text()).toContain('Cannot go below zero.');
      });
    });

    describe('error message', () => {
      it('is removed once the increment button is clicked', () => {
        wrapper = setup(App, {}, { counter: 0, error: true, });

        const incrementButton =findByTestAttr(wrapper, 'increment-button');
        incrementButton.simulate('click');
        
        expect(wrapper.text()).not.toContain('Cannot go below zero.');
      });
    });
  });
});
