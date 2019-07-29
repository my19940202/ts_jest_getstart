import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

// 单独抽离，便于单测的时候引入测试（如果把index.tsx引入测试会报错。渲染的节点node层渲染找不到）
export default class Link extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {
            class: STATUS.NORMAL,
        };
      }
    
      _onMouseEnter() {
        this.setState({class: STATUS.HOVERED});
      }
    
      _onMouseLeave() {
        this.setState({class: STATUS.NORMAL});
      }
    
      render() {
        return (
          <a
            className={this.state.class}
            href={this.props.page || '#'}
            onMouseEnter={this._onMouseEnter}
            onMouseLeave={this._onMouseLeave}
          >
            {this.props.children}
          </a>
        );
      }
}
