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
				<h2>You have {props.score} <Points number={props.score}/> of love.</h2>
				<h4>{props.click} <Points number={props.click}/> per click.</h4>
			</div>
			<div className="welcomeMessage">
				<h3>Your dog's name is {props.dogName}.<br />
				Your dog is {props.dogAge} years old.<br />
				What a dog!</h3>
			</div>
		</div>
	);
}