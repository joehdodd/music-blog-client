import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPost } from "../../state/actions/posts";

import "./Post.css";

class PostContainer extends React.Component {
  componentDidMount() {
    const {
      match: { params },
      getPost,
    } = this.props;
    getPost(params.postId);
  }
  render() {
    const { post } = this.props;
    return (
      <>
        <div className="post-wrapper">
          <code>{JSON.stringify(post, null, 2)}</code>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, posts, spotify } = state;
  return {
    post: posts.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => {
      dispatch(getPost(postId));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostContainer)
);
