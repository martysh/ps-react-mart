import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Modal from './Modal';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('the Modal component', () => {
  fit('toggleClick works', () => {
    const onCloseClick = jest.fn();

    const wrapper = shallow(
      <Modal open toggleModal={onCloseClick}>
        <div className="content">Hello World</div>
      </Modal>
    );
    // expect(wrapper).toHaveStyleRule('display', 'none');
    expect(wrapper.find('.content')).toHaveLength(1);
    expect(wrapper.find('.content').text()).toBe('Hello World');

    wrapper.find('.close').simulate('click');
    expect(onCloseClick).toHaveBeenCalled();
  });

  it('should match the last snapshot', () => {
    const wrapper = shallow(
      <Modal open toggleModal={() => {}}>
        nothing
      </Modal>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('it closes on toggle', () => {
    const tree = renderer.create(
      <Modal key={1} open toggleModal={() => {}}>
        {' '}
        nothing
      </Modal>
    );
    const jsonTree = tree.toJSON();
    expect(jsonTree).toHaveStyleRule('display', 'grid');
    tree.update(
      <Modal key={2} open={false} toggleModal={() => {}}>
        nothing
      </Modal>
    );
    expect(tree.toJSON()).toHaveStyleRule('display', 'none');
  });

  it('it works with react test renderer', () => {
    const tree = renderer
      .create(
        <Modal open toggleModal={() => {}}>
          nothing
        </Modal>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('display', 'grid');
    expect(tree).toMatchSnapshot();
  });
});
