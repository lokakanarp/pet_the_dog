import React, { Component } from 'react';

class Stick extends Component {
	  render() {
		   if (this.props.stickVisible) {
			  return (<div className="itemModified" onClick={this.props.handleStick}>
					<div className="sidebarImage">
					   <img src={window.location.origin + '/img/stick.png'} alt="stick" /><br /> 
					</div>
					  <p>Price: {this.props.stickPrice} points.<br />
					  +4 points per click.</p>
				</div>
			   ); 
		   }
		  
		  return (<div className="itemOriginal" onClick={this.props.handleStick}>		  <p>Cool Stick <br />
				<span className="sidebar_points">Price: 200 points.<br />
					  +4 points per click.</span></p>
			</div>); 	
				  }
}
				  
export default Stick;