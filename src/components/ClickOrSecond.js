import React from 'react';

export default function ClickOrSecond (props) {
	console.log(props.caption)
	if (props.caption === "Beautiful bone") {
		return <span>second</span>
	}
	return <span>click</span>
}