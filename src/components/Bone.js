import React from 'react';


export default function Bone (props) {
		  if (props.visible) {
			  return (<div className="item" onClick={props.handleClick}>
					<div className="sidebarImage">
					   <img src={window.location.origin + "/img/bone1.png" } 
					  alt="bone"  /><br /> 
					</div>
					  <p>Price: {props.price} points.<br />
					  +2 points per click.</p>
				</div>
			   ); 
		   }
		  return (<div className="item" onClick={props.handleClick}>		  
				  <p>Beautiful bone<br />
				  <span className="sidebar_points">Price: { props.price } points.<br /> +1 point per second.</span></p>
		  </div>); 
	
}