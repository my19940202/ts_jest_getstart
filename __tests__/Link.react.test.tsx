// Link.react.test.js
import React from 'react';
import Link from '../src/index';
import { shallow } from 'enzyme';

test('Link changes the class when hovered', () => {
    const component = shallow(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );
    if (component) {
        // let tree = component.toJSON();
        console.log(component.text(), 'fasdfds');
        // expect(tree).toMatchSnapshot();
      
        // manually trigger the callback
        // tree.props.onMouseEnter();
        // // re-rendering
        // tree = component.toJSON();
        // expect(tree).toMatchSnapshot();
      
        // // manually trigger the callback
        // tree.props.onMouseLeave();
        // // re-rendering
        // tree = component.toJSON();
        // expect(tree).toMatchSnapshot();
    }
});
