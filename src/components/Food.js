import React, { Component } from 'react';

class Food extends Component {
	  render() {
		   if (this.props.foodVisible) {
			  return (<div className="itemModified" onClick={this.props.handleFood}>
					<div className="sidebarImage">
					   <img src={window.location.origin + '/img/food.png'} alt="dog food" /><br /> 
					</div>
					  <p>Price: {this.props.foodPrice} points.<br />
					  +3 points per click.</p>
				</div>
			   ); 
		   }
		  
		  return (<div className="itemOriginal" onClick={this.props.handleFood}>		  <p>Yummy food <br />
				<span className="sidebar_points">Price: 100 points.<br />
					  +3 points per click.</span></p>
			</div>); 	
				  }
}
				  
export default Food;