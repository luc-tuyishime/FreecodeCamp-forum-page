import React from "react";
import { Col } from "antd";

import "./card.scss";

const ContentFooter = ({ xs, xl, span, textTitle, textValue }) => (
    <Col xs={xs} xl={xl} span={span}>
        <div>
            <p className="card-footer-title">{textTitle}</p>
            <p className="card-footer">{textValue}</p>
        </div>
    </Col>
);

export default ContentFooter;
