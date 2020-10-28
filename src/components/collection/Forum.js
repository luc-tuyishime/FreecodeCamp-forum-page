import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Spin } from "antd";

import { post } from "../../redux/actions/post";
import CardItem from "../common/Card";
import "./forum.scss";

class Forum extends Component {
    state = {
        posts: [],
        users: [],
        loading: false
    };

    findUsersWhoPosted = (id) =>
        this.state.users.find((user) => (user.id === id ? user.avatar_template : ""));

    componentDidMount() {
        const { post } = this.props;
        post();
    }

    static getDerivedStateFromProps(props) {
        return {
            posts: props?.listOfPost,
            users: props?.listOfUsers,
            loading: props?.loading
        };
    }

    render() {
        return (
            <Row gutter={16} className="card-row">
                {this.state.loading ? (
                    <div className="loader-style">
                        <Spin tip="Loading...." size="large" />
                    </div>
                ) : (
                    this.state.posts.map((index) => {
                        const { posters } = index;
                        const images = [];
                        posters?.map((poster) =>
                            images.push(this.findUsersWhoPosted(poster.user_id))
                        );

                        return (
                            <CardItem
                                title={index.title}
                                key={index.id}
                                replies={index.posts_count}
                                views={index.views}
                                last_posted_at={index.last_posted_at}
                                images={images}
                            />
                        );
                    })
                )}
            </Row>
        );
    }
}

const mapStateToProps = ({
    post: {
        listOfPost,
        listOfUsers,
        fetchPosts: { loading, message, errors }
    }
}) => ({ listOfPost, listOfUsers, loading, message, errors });

export default connect(mapStateToProps, { post })(Forum);
