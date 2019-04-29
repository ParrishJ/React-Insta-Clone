import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import dummyData from './dummy-data'
import './App.css';

class App extends React.Component {
  constructor() {
    super ();
    this.state = {
      dummyData: dummyData
    };
  }
  render () {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
