import React, { Component } from 'react';
import Startpage from './Startpage';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Item from './Item';
import ball from '../images/ball.png';
import bone from '../images/bone1.png';
import food from '../images/food.png';
import stick from '../images/stick.png';
import treats from '../images/treats.png';

import '../App.css';

class App extends Component {
	
  state = {
	  loggedIn: false,
	  dogName: 'kajsavoff',
	  score: 0,
	  click: 1,
	  ballPrice: 20,
	  ballVisible: false,
	  foodPrice: 100,
	  foodVisible: false,
	  stickPrice: 200,
	  stickVisible: false ,
	  treatsPrice: 450,
	  treatsVisible: false,
	  bonePrice: 1000,
	  boneVisible: false
  }

	handleLogin = (dogName, dogAge) => {
    	this.setState({ loggedIn: true, dogName: dogName, dogAge: dogAge });
  	}
	
	handleBall = () => {
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
	}
	
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
	handleTreats = () => {
		if (this.state.score - this.state.treatsPrice >= 0) {
		this.setState({ 
			treatsVisible: true,
			score: this.state.score - this.state.treatsPrice,
			click: this.state.click + 5,
			treatsPrice: Math.round(this.state.treatsPrice * 2) 
		   })
		} else {
			alert("You need more points to buy this item.")
		}
	}
	handleBone = () => {
		if (this.state.score - this.state.bonePrice >= 0) {
		this.handleBoneScore();
		this.setState({ 
			boneVisible: true,
			score: this.state.score - this.state.bonePrice,
			bonePrice: Math.round(this.state.bonePrice * 2.5) 
		   })
		} else {
			alert("You need more points to buy this item.")
		}
	}
	handleBoneScore = () => {
		setInterval(
		  () => this.setState({
			  score: this.state.score + 1
		  }),
		  1000
		);
	}
	
	handleClick = () => {
		this.setState({ score: this.state.score + this.state.click });
		this.bonusPoints();
	}
	
	bonusPoints = () => {
		if (this.state.score === 120 || this.state.score === 500 ||
		   this.state.score === 800) {
		alert("Your dog loves you so much it decided to give you 30 extra points!")
		this.setState({score: this.state.score + 30});
		}
	}
	
	
	saveDog = () => {
		let newDogs = JSON.parse(localStorage.getItem('savedDogs')) || [];
		if (newDogs.find((dog) => dog.name === this.state.dogName)) {
			newDogs = newDogs.filter((dog) => dog.name !== this.state.dogName);
			newDogs = newDogs.concat([{name: this.state.dogName, score: this.state.score}]);
		}
		else {
			newDogs = newDogs.concat([{name: this.state.dogName, score: this.state.score}]);	
		}
		localStorage.setItem('savedDogs', JSON.stringify(newDogs));			
		
	}

	
  render() {
	  
	if(this.state.loggedIn) {
    return (
		 <div>
			<Header 
				dogName={this.state.dogName} 
				dogAge={this.state.dogAge}
				score={this.state.score}
				click={this.state.click}
				saveDog={this.saveDog} />
			<div className="wrapper">
				<Main handleClick={this.handleClick} />
				<Sidebar>
					<Item 
						price={this.state.ballPrice} 
						handleClick={this.handleBall}
						visible={this.state.ballVisible}
						caption="Fun ball"
						src={ball}
						alt="Ball"
						extraPoints={1} />
					<Item 
						price={this.state.foodPrice} 
						handleClick={this.handleFood}
						visible={this.state.foodVisible}
						caption="Yummy food"
						src={food}
						alt="Dog food"
						extraPoints={3} />
					<Item
						price={this.state.stickPrice} 
						handleClick={this.handleStick}
						visible={this.state.stickVisible}
						caption="Cool stick"
						src={stick}
						alt="Stick"
						extraPoints={4} />
					<Item
						price={this.state.treatsPrice} 
						handleClick={this.handleTreats}
						visible={this.state.treatsVisible}
						caption="Tasty treats"
						src={treats}
						alt="Dog treats"
						extraPoints={5} />
					<Item
						price={this.state.bonePrice} 
						handleClick={this.handleBone}
						visible={this.state.boneVisible}
						caption="Beautiful bone"
						src={bone}
						alt="Bone"
						extraPoints={1} />
				</Sidebar>
			</div>
			<Footer />
		 </div>
		);
	  }
	return (
		<Startpage handleLogin={this.handleLogin}/>
	);
	}
}

export default App;
