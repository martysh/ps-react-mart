import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import PasswordInput from './PasswordInputHooks';

Enzyme.configure({ adapter: new Adapter() });

describe('the PasswordInput component', () => {

  test('toggles input type when show/hide password clicked', () => {
    const wrapper = mount(<PasswordInput
      htmlId="test"
      name="test"
      value=""
      onChange={() => {}}
      showVisibilityToggle
      />
    );

    // Password input should have a type of password initially
    expect(wrapper.find('input[type="password"]')).toHaveLength(1);
    expect(wrapper.find('input[type="text"]')).toHaveLength(0);

    wrapper.find('EyeIcon').simulate('click');

    // Password input should have a type of text after clicking toggle
    expect(wrapper.find('input[type="password"]')).toHaveLength(0);
    expect(wrapper.find('input[type="text"]')).toHaveLength(1);
  });


  it('should match the last snapshot with msg', () => {
    const wrapper = shallow(<PasswordInput
      htmlId="password-input-example-all-features"
      name="password"
      onChange={ event => console.log(event.target.value) }
      value="blablabla"
      error="some error just happened"
      showVisibilityToggle
     />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should match the last mount snapshot with msg', () => {
    const wrapper = mount(<PasswordInput
      htmlId="password-input-example-all-features"
      name="password"
      onChange={ event => console.log(event.target.value) }
      value="blablabla"
      error="some error just happened"
      showVisibilityToggle
     />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
