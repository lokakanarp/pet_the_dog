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
	  ballVisible: false,
	  foodPrice: 100,
	  foodVisible: false,
	  stickPrice: 200,
	  stickVisible: false  
  }
///Testing
	handleItem = (itemPrice, itemVisible, number, percent) => {
		if (this.state.score - this.state.itemPrice >= 0) {
		this.setState({ 
			itemVisible: true,
			score: this.state.score - this.state.itemPrice,
			click: this.state.click + number,
			itemPrice: Math.round(this.state.itemPrice * percent) 
		   })
		} else {
			alert("You need more points to buy this item.")
		}
	}
////Testing
	/*handleBall = () => {
		if (this.state.score - this.state.ballPrice >= 0) {
		this.setState({ 
			ballVisible: true,
			score: this.state.score - this.state.ballPrice,
			click: this.state.click + 1,
			ballPrice: Math.round(this.state.ballPrice * 1.1) 
		   })
		} else {
			alert("You need more points to buy this item.")
		}
	}*/
	
	handleFood = () => {
		if (this.state.score - this.state.foodPrice >= 0) {
		this.setState({ 
			foodVisible: true,
			score: this.state.score - this.state.foodPrice,
			click: this.state.click + 3,
			foodPrice: Math.round(this.state.foodPrice * 1.5) 
		   })
		} else {
			alert("You need more points to buy this item.")
		}
	}
	
	handleStick = () => {
		if (this.state.score - this.state.stickPrice >= 0) {
		this.setState({ 
			stickVisible: true,
			score: this.state.score - this.state.stickPrice,
			click: this.state.click + 4,
			stickPrice: Math.round(this.state.stickPrice * 1.8) 
		   })
		} else {
			alert("You need more points to buy this item.")
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
				handleItem={this.handleItem(this.itemPrice, this.itemVisible, this.number, this.percent)}
				foodPrice={this.state.foodPrice} 
				foodVisible={this.state.foodVisible}
				handleFood={this.handleFood}
				stickPrice={this.state.stickPrice}
				stickVisible={this.state.stickVisible}
				handleStick={this.handleStick}/>
		</div>
		<Footer />
	 </div>
    );
  }
}

export default App;
