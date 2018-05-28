import React from 'react';

export default function Year (props) {
	let word = props.dogAge == 1 || props.dogAge == "one" ? "year" :
	"years";
	return (<span>{word}</span>)
	
}