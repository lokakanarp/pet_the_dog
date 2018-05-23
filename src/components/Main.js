import React from 'react';

export default function Main (props){
    return (
     <div className="main">
		<div className="image" onClick={ props.handleClick }>
			<img src={window.location.origin + '/img/dog_2.gif'} alt="dog"/>
		</div>
	 </div>
    );
}

