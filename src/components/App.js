import React, { Component } from 'react';
import Startpage from './Startpage';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import SavedDogs from './SavedDogs';
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
	  dogName: '',
	  score: 0,
	  click: 1,
	  toggle: false,
	  ballPrice: 20,
	  foodPrice: 100,
	  stickPrice: 200,
	  treatsPrice: 450,
	  bonePrice: 1000,
  }


	handleLogin = (dogName, dogAge) => {
    	this.setState({ loggedIn: true, dogName: dogName, dogAge: dogAge });
  	}
	
	handleItem = (price, extraClick, priceIncrease) => {
		if (this.state.score - price >= 0) {
		this.setState({ 
			score: this.state.score - price,
			click: this.state.click + extraClick,
			price: Math.round(this.state.price * priceIncrease) 
		   })
		} else {
			alert("You need more points to buy this item.")
		}
	}
	
	handleBall = () => {
		if (this.state.score - this.state.ballPrice >= 0) {
		this.setState({ 
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
		var todaysDate = new Date().toISOString().split('T')[0];
		let newDogs = JSON.parse(localStorage.getItem('savedDogs')) || [];
		if (newDogs.find((dog) => dog.name === this.state.dogName)) {
			newDogs = newDogs.filter((dog) => dog.name !== this.state.dogName);
			newDogs = newDogs.concat([{name: this.state.dogName, age: this.state.dogAge, score: this.state.score, saved: todaysDate}]);
		}
		else {
			newDogs = newDogs.concat([{name: this.state.dogName, age: this.state.dogAge, score: this.state.score, saved: todaysDate}]);	
		}
		localStorage.setItem('savedDogs', JSON.stringify(newDogs));
		alert('You have saved ' + this.state.dogName)
	}
	deleteDog = (dogToDelete) => {
		let newDogs = JSON.parse(localStorage.getItem('savedDogs'));
		newDogs = newDogs.filter((dog) => dog.name !== dogToDelete);
		localStorage.setItem('savedDogs', JSON.stringify(newDogs));
		this.handleToggle();
		alert('You deleted ' + dogToDelete);
	}
	
	handleToggle = () => {
		this.setState({toggle: !this.state.toggle})
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
				saveDog={this.saveDog}
				handleToggle={this.handleToggle}/>
			<div className="wrapper">
				<Main handleClick={this.handleClick} />
				<Sidebar>
					<Item 
						price={this.state.ballPrice} 
						handleClick={this.handleBall}
						originalPrice={20}
						caption="Fun ball"
						src={ball}
						alt="Ball"
						extraPoints={1} />
					<Item 
						price={this.state.foodPrice} 
						handleClick={this.handleFood}
						originalPrice={100}
						caption="Yummy food"
						src={food}
						alt="Dog food"
						extraPoints={3} />
					<Item
						price={this.state.stickPrice} 
						handleClick={this.handleStick}
						originalPrice={200}
						caption="Cool stick"
						src={stick}
						alt="Stick"
						extraPoints={4} />
					<Item
						price={this.state.treatsPrice} 
						handleClick={this.handleTreats}
						originalPrice={450}
						caption="Tasty treats"
						src={treats}
						alt="Dog treats"
						extraPoints={5} />
					<Item
						price={this.state.bonePrice} 
						handleClick={this.handleBone}
						originalPrice={1000}
						caption="Beautiful bone"
						src={bone}
						alt="Bone"
						extraPoints={1} />
				</Sidebar>
			</div>
			{this.state.toggle && <SavedDogs handleToggle={this.handleToggle} deleteDog={this.deleteDog}/>}
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
