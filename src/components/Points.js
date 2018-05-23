import React from 'react';

export default function Points (props) {
	if (props.number === 1) {
		return <span>point</span>
	}
	return <span>points</span>
}