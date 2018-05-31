import React from 'react';

export default function InputField (props) {
	return (
		<input 
			className="inputField"
			type="text"
			id={props.id}
			name={props.name}
			placeholder={props.placeholder}
			onChange={props.handleChange}
			value={props.value}
		/>
	)
	
}