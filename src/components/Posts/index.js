import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { onChange, getPosts } from "../../state/actions/posts";
import PostItem from "./PostItem";

import "./Posts.css";

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }
  onPostItemClick = (postId) => {
    console.log(postId);
  };
  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <>
        <div className="posts-wrapper">
          {!!posts.length && (
            <div className="posts-container">
              {posts.map((post) => (
                <PostItem post={post} />
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, posts, spotify } = state;
  return {
    spotifyAuthorized: auth.spotifyAuthorized,
    selectedItem: spotify.selectedItem,
    inputValues: posts.inputValues,
    posts: posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => {
      dispatch(onChange(name, value));
    },
    getPosts: () => {
      dispatch(getPosts());
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
);
