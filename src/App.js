import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

class App extends Component {
	
  state = {
	  dogName: 'kajsa'
  }
  render() {
    return (
     <div>
		<Header dogName={this.state.dogName}/>
	 </div>
    );
  }
}

export default App;
