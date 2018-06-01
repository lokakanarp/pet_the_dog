import React from 'react';
import Button from './Button';

export default function AlertMessage (props) {
	if (props.message === "item") {
		return (<div className="alertMessage">
				<h3>You need more points to buy this item.</h3>
				<Button closeAlertWindow={true} closeAlert={props.closeAlert} />
				</div>);
	  }
  	if (props.message === "points") {
		return (<div className="alertMessage">
				<h3>Your dog loves you so much it decided to give you 30 extra points!</h3>
				<Button closeAlertWindow={true} closeAlert={props.closeAlert} />
				</div>);
	  }
	if (props.message === "save") {
		return (<div className="alertMessage">
				<h3>You have saved a dog</h3>
				<Button closeAlertWindow={true} closeAlert={props.closeAlert} />
				</div>);
	  }
	if (props.message === "delete") {
		return (<div className="alertMessage">
				<h3>You deleted a dog</h3>
				<Button closeAlertWindow={true} closeAlert={props.closeAlert} />
				</div>);
	}
}