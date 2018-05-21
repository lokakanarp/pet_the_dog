import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import '../App.css';

class App extends Component {
	
  state = {
	  dogName: 'kajsavoff',
	  score: 0,
	  click: 1,
	  
  }
	handleBall = () => {
		let quantity = 1;
		let points = 1;
		this.setState({ 
			click: this.state.click + points
		   });
	}
	
	handleClick = () => {
		this.setState({ score: this.state.score + this.state.click });
	}
	

  render() {
    return (
     <div>
		<Header dogName={this.state.dogName} score={this.state.score} />
		<div className="wrapper">
			<Main handleClick={this.handleClick} />
			<Sidebar items={this.state.items} handleBall={this.handleBall} />
		</div>
		<Footer />
	 </div>
    );
  }
}

export default App;
