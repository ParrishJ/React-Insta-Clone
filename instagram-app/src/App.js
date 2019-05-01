import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from "./Components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import withAuthenticate from "./Components/PostContainer/authentication/withAuthenticate";
import PostPage from "./Components/PostContainer/PostPage";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  render() {
    return (
      <div>
        <withAuthenticate />
      </div>
    );
  }
}

export default App;
