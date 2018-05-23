import React from 'react';
import Points from './Points';

export default function Item (props) {
		  if (props.visible) {
			  return (<div className="item" onClick={props.handleClick}>
					<div className="sidebarImage">
					   <img src={window.location.origin + props.imgAddress } 
					  alt={ props.alt } /><br /> 
					</div>
					  <p>Price: {props.price} points.<br />
					  +{ props.extraPoints } <Points number={ props.extraPoints }/> per click.</p>
				</div>
			   ); 
		   }
		  return (<div className="item" onClick={props.handleClick}>		  <p> {props.caption} <br />
				<span className="sidebar_points">Price: { props.price } points.<br />
					  +{ props.extraPoints } <Points number={ props.extraPoints }/> per click.</span></p>
		  </div>); 
	
}