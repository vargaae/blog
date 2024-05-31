import PostCreate from "./post-create/PostCreate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Blog App <code>Posts - </code> Comments
        </p>
        <a className="App-link" href="">
          Blog App
        </a>
      </header>
      <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
      </div>
    </div>
  );
}

export default App;
