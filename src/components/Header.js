import React from 'react';
import Points from './words/Points';
import Year from './words/Year';
import logo_dog_2 from '../images/logo_dog_2.gif';
import dog_small from '../images/dog_small.gif';

export default function Header (props) {
	return (
		<div className="header">
			<div className="logoDiv">
				<div className="logo">
					<img src={logo_dog_2} alt="logo"/>
				</div>
				<div className="logoImg">
					<img src={dog_small} alt="dog"/>
				</div>
			</div>
			<div className="scoreBoard">
				<h2>You have {props.score} <Points score={props.score}/> of love.</h2>
				<h4>{props.click} <Points score={props.click}/> per click.</h4>
			</div>
			<div className="welcomeMessage">
				<h3>Your dog's name is {props.dogName}.<br />
				Your dog is {props.dogAge} <Year dogAge={props.dogAge}/> old.<br />
				What a dog!</h3>
				<button className="saveDogButton" id="saveDogButton" onClick={props.saveDog}>Save dog</button>
			</div>
		</div>
	);
}