import API from "../../API";

export const onChange = (name, value) => {
  return {
    type: "POST_INPUT_CHANGE",
    name,
    value,
  };
};

function setPosts(posts) {
  return {
    type: "SET_POSTS",
    posts,
  };
}

function setPost(post) {
  return {
    type: "SET_POST",
    post,
  };
}

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const {
        data: { data: posts },
      } = await API("/post", {
        method: "GET",
      });
      dispatch(setPosts(posts));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getPost = (postId) => {
  return async (dispatch) => {
    try {
      const {
        data: { data: post },
      } = await API(`/post/${postId}`, {
        method: "GET",
      });
      dispatch(setPost(post));
    } catch (e) {
      console.log(e);
    }
  };
};
