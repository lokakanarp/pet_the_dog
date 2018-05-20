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
	  items: [
		  { id: 1,
		  	name: 'ball',
		  	img: '/img/bull.png',
		  	quantity: 0,
		  	points: 1,
		  	price: 50 },
	  ]
	  
  }
	
	
	handleBall = () => {
		this.setState({
			price: Math.round((this.state.items[0].price * 1.1)* 100 / 100), 
			quantity: this.state.items[0].quantity + 1,
			click: this.state.click + this.state.items[0].points,
		   });
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
