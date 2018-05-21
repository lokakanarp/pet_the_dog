import React, { Component } from 'react';
//import Sidebar from './Sidebar';

class Ball extends Component {
	 render() {
	/*if (this.props.items[0].quantity < 1) {
		return (<div className="ItemOriginal" onClick={this.props.handleBall}>		  <p>Ball <br />
				<span className="sidebar_points">Price: {this.props.items[0].price} points.</span></p>
			</div>);
		}*/
		return (<div className="ItemModified">
					<div className="sidebarImage">
					   <img src={window.location.origin + '/img/ball.png'} alt="ball" /><br />
					   <p>Price:  points.</p>
					</div>
				</div>
			   );
	 }
}
export default Ball;