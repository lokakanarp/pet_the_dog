import React, { Component } from 'react';
//import Sidebar from './Sidebar';

class Ball extends Component {
	  render() {
		   if (this.props.ballVisible) {
			  return (<div className="ItemModified" onClick={this.props.handleBall}>
					<div className="sidebarImage">
					   <img src={window.location.origin + '/img/ball.png'} alt="ball" /><br />
					   <p>Price: {this.props.ballPrice} points.</p>
					</div>
				</div>
			   ); 
		   }
		  
		  return (<div className="ItemOriginal" onClick={this.props.handleBall}>		  <p>Ball <br />
				<span className="sidebar_points">Price: 20 points.</span></p>
			</div>); 	
				  }
}
				  
export default Ball;




	
	

			