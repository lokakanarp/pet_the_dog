import React from 'react';

export default function ClickOrSecond (props) {
	let word = props.caption === "Beautiful bone" ? "second" : "click"
	return <span>{word}</span>
}