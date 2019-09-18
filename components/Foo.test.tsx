import React from 'react';
import { shallow } from 'enzyme';

import Foo from './Foo';

describe('<Foo />', () => {
  it('renders <Foo /> component', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper).toMatchSnapshot();
  });
});
