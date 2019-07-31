// Link.react.test.js
import * as React from 'react';
import Link from '../../Link';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// TODO详细看看每个流程的作用
// 单测运行前的一系列准备工作：https://jestjs.io/docs/zh-Hans/api#afterallfn-timeout
afterAll(() => {
    console.log('afterAll');
});

afterEach(() => {
    console.log('afterEach');
});

beforeAll(() => {
    console.log('beforeAll');
});

beforeEach(() => {
    console.log('beforeEach');
});

// creates a block that groups together several related tests.
describe("Link's tests", () => {
    // 最简单的组件测试，确认不会抛出异常
    test('冒烟测试', () => {
        // shallow render mount 区别搞清楚(https://airbnb.io/enzyme/docs/api/)
        const wrapper = shallow(
            <Link page="http://www.facebook.com">Facebook</Link>,
        );
        expect(wrapper.contains("Facebook")).toEqual(true);
        // 生成快照
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // it是test的别名(https://jestjs.io/docs/zh-Hans/api#testname-fn-timeout)
    let timeout = 2000;
    it('trigger event in Link Component', () => {
        const wrapper = shallow(
            <Link page="http://www.facebook.com">Facebook</Link>,
        );

        // 点击button counter累加
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.txt').text()).toEqual('3');

        // TODO: 常用事件
        // change
        wrapper.find('input').simulate('change', {
            target: {value: 'world'}
        });
        expect(wrapper.find('.name').text()).toEqual('world');
        // hover
        wrapper.find('a').simulate('mouseenter');
        expect(wrapper.find('a').hasClass('hovered')).toEqual(true);
        wrapper.find('a').simulate('mouseleave');
        expect(wrapper.find('a').hasClass('normal')).toEqual(true);
    }, timeout); // timeout可选参数
})