import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from "./Components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
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
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((post, index) => (
          <PostContainer post={post} index={index} key={index} />
        ))}
        <PostPage />
      </div>
    );
  }
}

export default App;
