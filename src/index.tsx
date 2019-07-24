import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <h1>jest get start</h1>
                <ul>
                    <li>func unit test</li>
                    <li>dom unit test</li>
                    <li>shapshot</li>
                </ul>
        </div>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
