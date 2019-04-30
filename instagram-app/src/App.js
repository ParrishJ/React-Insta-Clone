import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import dummyData from './dummy-data'
import './App.css';

class App extends React.Component {
  constructor() {
    super ();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount () {
    this.setState({
      dummyData: dummyData
    })
  }

  render () {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}



export default App;

