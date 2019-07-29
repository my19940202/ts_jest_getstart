
import * as React from "react";
import { render } from "react-dom";
import Link from './Link';

function App() {
    return (
        <>
            <h1>jest get start</h1>
            <ul>
                <li>func unit test</li>
                <li>dom unit test</li>
                <li>shapshot</li>
            </ul>
            <Link page="https://www.qq.com">
                <h2>this is h2</h2>
            </Link>
        </>
    );
}

const rootElement = document.getElementById("root");
render(
  <App />,
  rootElement
);
