import React from 'react';
import Points from './Points';

export default function Header (props) {
	return (
		<div className="header">
			<div className="logoDiv">
				<div className="logo">
					<img src={window.location.origin + '/img/logo_dog_2.gif'} alt="logo"/>
				</div>
				<div className="logoImg">
					<img src={window.location.origin + '/img/dog_small.gif'} alt="dog"/>
				</div>
			</div>
			<div className="scoreBoard">
				<h3>You have {props.score} <Points number={props.score}/> of love.</h3>
			</div>
			<div className="welcomeMessage">
				<h3>Your dog's name: {props.dogName}</h3>
			</div>
		</div>
	);
}