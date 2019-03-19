import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Modal from './Modal';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('the Modal component', () => {

  it('toggleClick works', () => {

    const onCloseClick = jest.fn();

    const wrapper = shallow(<Modal
        open={true}
        children={<div className='content'>Hello World</div>}
        toggleModal={onCloseClick}
      />
    );
    expect(wrapper).toHaveStyleRule('display', 'none');
    expect(wrapper.find('.content')).toHaveLength(1);
    expect(wrapper.find('.content').text()).toBe('Hello World');

    wrapper.find('.close').simulate('click');
    expect(onCloseClick).toHaveBeenCalled();
  });

  it('should match the last snapshot', () => {
    const wrapper = shallow(
      <Modal open={true} toggleModal={()=>{}}
      children='nothing'
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  fit('it closes on toggle', () => {
    let tree = renderer.create(<Modal key={1} open={true} toggleModal={()=>{}}
    children='nothing'
    />);
    const jsonTree = tree.toJSON();
    expect(jsonTree).toHaveStyleRule('display', 'grid');
    tree.update(<Modal key={2} open={false} toggleModal={()=>{}}
    children='nothing'
    />);
    expect(tree.toJSON()).toHaveStyleRule('display', 'none');
  });

  it('it works with react test renderer', () => {
    const tree = renderer.create(<Modal open={true} toggleModal={()=>{}}
    children='nothing'
    />).toJSON();
    expect(tree).toHaveStyleRule('display', 'grid');
    expect(tree).toMatchSnapshot();
  });

});
