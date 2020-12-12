import React from "react";
import { Link } from "react-router-dom";

export default ({ post }) => {
  return (
    <Link to={`post/${post.id}`}>
      <div className="post-item-container">
        <h4>{post.title}</h4>
      </div>
    </Link>
  );
};
