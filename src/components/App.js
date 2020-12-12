import { Route } from "react-router-dom";
import PostsContainer from "./Posts";
import PostContainer from "./Post";

import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" exact component={PostsContainer} />
      <Route path="/post/:postId" component={PostContainer} />
    </div>
  );
}

export default App;
