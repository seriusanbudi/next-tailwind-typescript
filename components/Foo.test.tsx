import React from 'react';
import { shallow } from 'enzyme';

import Foo from './Foo';

describe('<Foo />', () => {
  const wrapper = shallow(<Foo />);

  it('renders component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contain text Foo', () => {
    expect(wrapper.text()).toMatch('Foo');
  });
});
