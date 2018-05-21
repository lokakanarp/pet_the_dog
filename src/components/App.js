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
	  ballPrice: 20,
	  ballVisible: false
	  
	  
  }
	handleBall = () => {
		if (this.state.score - this.state.ballPrice >= 0) {
		this.setState({ 
			ballVisible: true,
			score: this.state.score - this.state.ballPrice,
			click: this.state.click + 1,
			ballPrice: Math.round(this.state.ballPrice * 1.1) 
		   });
		}
	}
	
	handleClick = () => {
		this.setState({ score: this.state.score + this.state.click });
		this.bonusPoints();
	}
	
	bonusPoints = () => {
			if (this.state.score === 100 || this.state.score === 500 ||
			   this.state.score === 800) {
			alert("Your dog loves you so much it decided to give you 30 extra points!")
			this.setState({score: this.state.score + 30});
			}
	}
	
	

  render() {
	
    return (
     <div>
		<Header dogName={this.state.dogName} score={this.state.score} />
		<div className="wrapper">
			<Main handleClick={this.handleClick} />
			<Sidebar 
				ballPrice={this.state.ballPrice} 
				ballVisible={this.state.ballVisible}
				handleBall={this.handleBall} />
		</div>
		<Footer />
	 </div>
    );
  }
}

export default App;
