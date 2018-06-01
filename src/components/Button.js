import React from 'react';

export default function Button(props){
	if (props.login) {
		return (<button type="submit" className="submitButton">Let's play!</button>)
	  }
  	if (props.showSavedDogs) {
		return (<button onClick={props.handleToggle} className="profileButton">Show saved dogs</button>)
	  }
	if (props.close) {
		return (<button onClick={props.handleToggle} className="profileButton close">Close</button>)
	  }
	if (props.closeAlertWindow) {
		return (<button className="profileButton close" onClick={props.closeAlert}>Close</button>)
	  }
	
  	return (<button id="saveDogButton" onClick={props.saveDog} className="profileButton">Save dog</button>)
}