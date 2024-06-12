import PostCreate from "./post-create/PostCreate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-link">Blog App</h1>
        <div className="row">
          <div className="container col">
            <h1>Create Post</h1>
            <PostCreate />
          </div>
          <div className="container col">
            <h1>Posts</h1>
          </div>
        </div>
      </header>
      <footer className="App-footer">
        Posts <code> - Blog App - </code> Comments
      </footer>
    </div>
  );
}

export default App;
