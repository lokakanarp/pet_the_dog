import React from 'react';

export default function Points (props) {
	let word = props.score === 1 ? "point" : "points";
	return <span>{word}</span>;
}