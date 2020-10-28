import React from "react";
import { Card, Col, Avatar, Row, Tooltip } from "antd";
import { withRouter } from "react-router-dom";
import "dotenv/config";

import { getTimeAgo } from "../../helpers/getTimeAgo";
import { openInNewTab } from "../../helpers/openInNewTab";
import ContentFooter from "./contentFooter";
import "./card.scss";

const { REACT_APP_AVATAR_URL, REACT_APP_URL, REACT_APP_USER_PROFILE } = process.env;

let posterImgUrl;

const CardItem = ({ replies, views, last_posted_at, title, slug, images, history }) => (
    <Col xs={24} xl={8} className="card-component" span={8}>
        <Card
            className="custom-card"
            actions={[
                <div className="content-bottom">
                    <Row>
                        <ContentFooter
                            xs={9}
                            xl={8}
                            span={8}
                            textTitle="Replies"
                            textValue={replies}
                        />
                        <ContentFooter
                            xs={9}
                            xl={8}
                            span={8}
                            textTitle="Views"
                            textValue={views}
                        />

                        <Col xs={6} xl={8} span={8}>
                            <div>
                                <p className="card-footer-title">Activity</p>
                                <p className="card-footer">
                                    {" "}
                                    {getTimeAgo(last_posted_at)}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            ]}>
            <div
                className="content-up"
                onClick={() => history.push(openInNewTab(`${REACT_APP_URL}${slug}`))}>
                <p className="post-title">{title}</p>
            </div>

            <div className="content-middle">
                <p className="card-footer-title">Posters</p>

                {images.map((index, key) => {
                  posterImgUrl = index?.avatar_template.replace("{size}", "24");

                  return (
                        <div className="inline-avatar">
                            <Tooltip
                                placement="topLeft"
                                color={"#0288d1"}
                                title={`${REACT_APP_USER_PROFILE}${index.username}`}>
                                <Avatar
                                    className="avatar-img"
                                    key={key}
                                    onClick={() => history.push(openInNewTab(`${REACT_APP_USER_PROFILE}${index.username}`))
                                    }
                                    src={`${REACT_APP_AVATAR_URL}/${posterImgUrl}`}
                                />
                            </Tooltip>
                        </div>
                  );
                })}
            </div>
        </Card>
    </Col>
);

export default withRouter(CardItem);
