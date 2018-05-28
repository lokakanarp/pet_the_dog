import React from 'react';
import dog_2 from '../images/dog_2.gif';

export default function Main (props){
    return (
     <div className="main">
		<div className="image" onClick={ props.handleClick }>
			<img src={dog_2} alt="dog"/>
		</div>
	 </div>
    );
}

