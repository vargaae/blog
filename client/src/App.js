import PostCreate from "./post-create/PostCreate";
import PostList from "./post-list/PostList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-link">Blog App</h1>
        <div className="container">
          <h1>Create Post</h1>
          <PostCreate />
          <hr />
          <h1>Posts</h1>
          <PostList />
        </div>
      </header>
      <footer className="App-footer">
        Posts <code> - Blog App - </code> Comments
      </footer>
    </div>
  );
}

export default App;
