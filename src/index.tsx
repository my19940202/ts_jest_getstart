import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};
// class App extends React.Component<AppPropsInterface, {menuConfig: any[]; searchOptions: any[]}> {

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

function App() {
    return (
        <>
            <h1>jest get start</h1>
            <ul>
                <li>func unit test</li>
                <li>dom unit test</li>
                <li>shapshot</li>
            </ul>
            <Link>
                <h2>this is h2</h2>
            </Link>
        </>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
