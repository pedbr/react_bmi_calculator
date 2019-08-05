import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';

import DisplayResult from '../Components/DisplayResult';
import App from '../App';

describe('<App />', () => {
  it('renders header', () => {
    const component = shallow(<App />);
    const header = <div className="title">BMI Calculator</div>;
    expect(component.contains(header)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = shallow(<App />);
    const weightLabel = <label>Weight (kg) </label>;
    const heightLabel = <label>Height (cm) </label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

})

describe('<DisplayResult />', () => {
  it('displays the calculation correct(metric)', () => {
    const component = shallow(<DisplayResult weight='100' height='195'/>)
    const response = <div id='response'> You are Overweight with a BMI of 26.3</div>
    expect(component.contains(response)).toEqual(true)
  })

  it('does not show anything when one of the input fields are empty', () => {
    const component = shallow(<DisplayResult weight='' height='195'/>);
    expect(component.text()).toBe("")
  })
})