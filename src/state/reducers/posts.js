import posts from "./mockPosts.json";


export default (
  state = {
    inputValues: {
      postTitle: "",
      postBody: "",
    },
    posts: [...posts],
    post: {},
  },
  action
) => {
  switch (action.type) {
    case "POST_INPUT_CHANGE":
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.name]: action.value,
        },
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: [...action.posts],
      };
    case "SET_POST":
      return {
        ...state,
        post: {...action.post},
      };
    default:
      return state;
  }
};
