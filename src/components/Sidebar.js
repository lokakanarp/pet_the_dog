import React, { Component } from 'react';
import Ball from './Ball';
import Food from './Food';
import Stick from './Stick';



class Sidebar extends Component {

  render() {
	  //console.log(this.props)
    return (
		
     <div className="sidebar">
			<Ball 
				ballPrice={this.props.ballPrice} 
				handleBall={this.props.handleBall}
				ballVisible={this.props.ballVisible} />
			<Food 
				foodPrice={this.props.foodPrice} 
				handleFood={this.props.handleFood}
				foodVisible={this.props.foodVisible} />
			<Stick
				stickPrice={this.props.stickPrice} 
				handleStick={this.props.handleStick}
				stickVisible={this.props.stickVisible} />
			<p>treat <br />
				<span className="sidebar_points">800 points.</span>
			</p>
			<p>bone <br />
				<span className="sidebar_points">1500 points.</span>
			</p>
		
	 </div>
    );
  }
}

export default Sidebar;