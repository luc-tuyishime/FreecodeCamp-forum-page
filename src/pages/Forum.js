import React from "react";

import Forum from "../components/collection/Forum";
import "./forum.scss";

const HomePage = () => (
    <div className="homepage">
        <p className="header-text">FreeCodeCamp Forum</p>
        <Forum />
    </div>
);

export default HomePage;
