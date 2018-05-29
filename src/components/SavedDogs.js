import React from 'react';

export default function SavedDogs (props) {
	const savedDogs = JSON.parse(localStorage.getItem('savedDogs'));
	console.log(savedDogs);
	const listItems = savedDogs.map((dog) => <li key={dog.name}>{dog.name}, {dog.score} points. Added: {dog.saved}</li>)
	return (
		<div className="savedDogs">
			<h2>Your saved dogs</h2>						
			<ul>{listItems}</ul>
			<button>Close</button>						
		</div>
	);
}