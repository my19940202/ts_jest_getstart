// Link.react.test.js
import * as React from 'react';
import Link from '../../Link';
import { shallow } from 'enzyme';

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
        const wrapper = shallow(
            <Link page="http://www.facebook.com">Facebook</Link>,
        );
        expect(wrapper.contains("Facebook")).toEqual(true);
    });

    // it是test的别名(https://jestjs.io/docs/zh-Hans/api#testname-fn-timeout)
    let timeout = 3000;
    it('click button in Link Component', () => {
        const wrapper = shallow(
            <Link page="http://www.facebook.com">Facebook</Link>,
        );
        
        // 点击button counter累加
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.txt').text()).toEqual('3');

        // TODO: 主流时间都去试试看
        // change
        // hover
    }, timeout); // timeout可选参数
})