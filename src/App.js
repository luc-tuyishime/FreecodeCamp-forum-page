import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/Forum";
import "./App.css";

const App = () => (
    <div className="App">
        <BrowserRouter>
            <Route exact path="/" component={HomePage} />
        </BrowserRouter>
    </div>
);

export default App;
