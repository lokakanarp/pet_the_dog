import React from 'react';
import Button from './Button';



export default function SavedDogs (props) {
	if(JSON.parse(localStorage.getItem('savedDogs'))){
		const savedDogs = JSON.parse(localStorage.getItem('savedDogs'));
		const listItems = savedDogs.map((dog) => <li key={dog.name}>{dog.name.toUpperCase()}, {dog.age} y/o, {dog.score} points. Added: {dog.saved}<button className="deleteButton" onClick={() => props.deleteDog(dog.name)}>delete</button></li>)

		return (
			<div className="savedDogs">
				<h2>Your saved dogs</h2>						
				<ul>{listItems}</ul>
				<Button handleToggle={props.handleToggle} close={true} />						
			</div>
		);
	}
	return (
			<div className="savedDogs">
				<h2>You don't have any saved dogs.</h2>						
				<Button handleToggle={props.handleToggle} close={true} />				
			</div>
		);
}