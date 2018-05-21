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
	  ballPrice: 20
	  
	  
  }
	handleBall = () => {
		if (this.state.score - this.state.ballPrice >= 0) {
		this.setState({ 
			score: this.state.score - this.state.ballPrice,
			click: this.state.click + 1 
		   });
		}
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
			<Sidebar items={this.state} handleBall={this.handleBall} />
		</div>
		<Footer />
	 </div>
    );
  }
}

export default App;
