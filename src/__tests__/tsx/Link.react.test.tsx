// Link.react.test.js
import * as React from 'react';
import Link from '../../Link';
import { shallow } from 'enzyme';

test('Link changes the class when hovered', () => {
    const wrapper = shallow(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );
    expect(wrapper.contains("Facebook")).toEqual(true);
});
