import React from 'react';

export default function Header (props) {
	return (
		<div className="header">
			<div className="logo">
				<h1>Pet the dog</h1>
			</div>
			<div className="welcomeMessage">
				<h3>Your dog's name: {props.dogName}</h3>
			</div>
			<div className="scoreBoard">
				<h3>You have {props.score} points of love.</h3>
			</div>
			
			
		</div>
	);
}