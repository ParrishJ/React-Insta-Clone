import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from "./Components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import withAuthenticate from "./Components/PostContainer/authentication/withAuthenticate";
import PostPage from "./Components/PostContainer/PostPage";
import Login from "./Components/Login/Login";
import "./App.css";

const ComponentFromWithAuthenticate = withAuthenticate(PostPage);

class App extends React.Component {
  render() {
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
