import React, { Component } from 'react';
//import Sidebar from './Sidebar';

class Ball extends Component {
	  render() {
		   if (this.props.ballVisible) {
			  return (<div className="itemModified" onClick={this.props.handleBall}>
					<div className="sidebarImage">
					   <img src={window.location.origin + '/img/ball.png'} alt="ball" /><br /> 
					</div>
					  <p>Price: {this.props.ballPrice} points.<br />
					  +1 points per click.</p>
				</div>
			   ); 
		   }
		  
		  return (<div className="itemOriginal" onClick={this.props.handleBall}>		  <p>Fun ball <br />
				<span className="sidebar_points">Price: 20 points.<br />
					  +1 points per click.</span></p>
			</div>); 	
				  }
}
				  
export default Ball;




	
	

			