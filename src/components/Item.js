import React from 'react';
import Points from './words/Points';
import ClickOrSecond from './words/ClickOrSecond';


export default function Item (props) {
	  if (props.originalPrice < props.price) {
		  return (
			  <div className="item" onClick={props.handleClick}>
				 <div className="sidebarImage">
				   <img src={props.src} 
				  alt={props.alt} /><br /> 
				</div>
				  <p>Price: {props.price} points.<br />
				  +{props.extraPoints} <Points number={props.extraPoints}/> per <ClickOrSecond caption={props.caption} />.</p>
			</div>
		   ); 
	   }
	  return (<div className="item" onClick={props.handleClick}>		  
				  <p> {props.caption} <br />
				  Price: {props.price} points.<br />
				  +{props.extraPoints} <Points number={props.extraPoints}/> per <ClickOrSecond caption={props.caption} />.</p>
		      </div>); 
	
}