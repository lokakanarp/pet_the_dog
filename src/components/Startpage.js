import React from 'react';
import logo_dog_2 from '../images/logo_dog_2.gif';
import dog_small from '../images/dog_small.gif';
import Login from './Login';

export default function Startpage (props) {
    return (
		<div className="formWrapper">
			<div className="logoLogin">
				<img src={logo_dog_2} alt="logo"/>
			</div>
			<div className="startMessage">
				<p>Welcome to the classic incremental game Pet the dog.<br />Rules: click the dog and receive points for as long as you want.</p>
			</div>
			<Login handleLogin={props.handleLogin} />
			<div className="logoImgLogin">
				<img src={dog_small} alt="dog"/>
			</div>
		</div>
    );
}